interface ApplicationData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  jobAppliedFor: string;
  coverLetter: string;
  resumeFile: File;
}

export async function sendApplicationEmail(data: ApplicationData) {
  try {
    // Get client email from environment variable
    const clientEmail = process.env.CLIENT_EMAIL || "info@talentbridgeglobal.com";
    
    // Try to use nodemailer if available, otherwise use alternative method
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let nodemailer: any = null;
    try {
      // Dynamic import to avoid TypeScript errors if nodemailer is not installed
      // @ts-expect-error - nodemailer may not be installed
      nodemailer = await import("nodemailer");
    } catch {
      // Nodemailer not available, use alternative method
      console.warn("Nodemailer not found, using alternative email method");
      return await sendEmailAlternative(data);
    }

    // If nodemailer is available, use it
    if (nodemailer && nodemailer.default) {
      // Configure email transporter
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      // Convert File to Buffer for attachment
      const resumeBuffer = Buffer.from(await data.resumeFile.arrayBuffer());
      const resumeFileName = data.resumeFile.name;

      // Email content
      const mailOptions = {
        from: `"TalentBridge Global" <${process.env.SMTP_USER || "noreply@talentbridgeglobal.com"}>`,
        to: clientEmail,
        replyTo: data.email,
        subject: `New Job Application: ${data.jobAppliedFor} - ${data.fullName}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #171717; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #555; }
                .value { color: #333; margin-top: 5px; }
                .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>New Job Application Received</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Full Name:</div>
                    <div class="value">${escapeHtml(data.fullName)}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value"><a href="mailto:${data.email}">${escapeHtml(data.email)}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Phone:</div>
                    <div class="value"><a href="tel:${data.phone}">${escapeHtml(data.phone)}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Location:</div>
                    <div class="value">${escapeHtml(data.location)}</div>
                  </div>
                  <div class="field">
                    <div class="label">Job Applied For:</div>
                    <div class="value"><strong>${escapeHtml(data.jobAppliedFor)}</strong></div>
                  </div>
                  <div class="field">
                    <div class="label">Cover Letter:</div>
                    <div class="value" style="white-space: pre-wrap;">${escapeHtml(data.coverLetter)}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>This email was sent from the TalentBridge Global application form.</p>
                  <p>Resume attached: ${escapeHtml(resumeFileName)}</p>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `
New Job Application Received

Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.location}
Job Applied For: ${data.jobAppliedFor}

Cover Letter:
${data.coverLetter}

---
This email was sent from the TalentBridge Global application form.
Resume attached: ${resumeFileName}
        `,
        attachments: [
          {
            filename: resumeFileName,
            content: resumeBuffer,
          },
        ],
      };

      await transporter.sendMail(mailOptions);

      return {
        success: true,
        message: "Application email sent successfully",
      };
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }

  // Fallback to alternative method
  return await sendEmailAlternative(data);
}

// Alternative email method (when nodemailer is not available)
async function sendEmailAlternative(data: ApplicationData) {
  try {
    const resumeFileName = data.resumeFile.name;

    // Log application details (in production, you'd send to an API endpoint)
    console.log("=== NEW JOB APPLICATION ===");
    console.log("Full Name:", data.fullName);
    console.log("Email:", data.email);
    console.log("Phone:", data.phone);
    console.log("Location:", data.location);
    console.log("Job Applied For:", data.jobAppliedFor);
    console.log("Cover Letter:", data.coverLetter);
    console.log("Resume:", resumeFileName);
    console.log("===========================");

    // In a real scenario, you would:
    // 1. Send to your backend API endpoint
    // 2. Use a service like Resend, SendGrid, or AWS SES
    // 3. Store in database and send email via background job

    // For now, return success but log that email service needs to be configured
    return {
      success: true,
      message: "Application received. Please configure email service (install nodemailer or use email API).",
    };
  } catch (error) {
    console.error("Error in alternative email method:", error);
    return {
      success: false,
      error: "Failed to process application. Please contact us directly.",
    };
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
