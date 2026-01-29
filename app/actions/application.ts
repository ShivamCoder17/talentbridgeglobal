"use server";

import { sendApplicationEmail } from "@/lib/email";

export async function submitApplication(formData: FormData) {
  try {
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const location = formData.get("location") as string;
    const jobAppliedFor = formData.get("jobAppliedFor") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const resume = formData.get("resume") as File | null;

    // Validate required fields
    if (!fullName || !email || !phone || !location || !jobAppliedFor || !resume) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please provide a valid email address.",
      };
    }

    // Send email with application details
    const emailResult = await sendApplicationEmail({
      fullName,
      email,
      phone,
      location,
      jobAppliedFor,
      coverLetter: coverLetter || "Not provided",
      resumeFile: resume,
    });

    if (!emailResult.success) {
      return {
        success: false,
        error: emailResult.error || "Failed to send application. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Application submitted successfully!",
    };
  } catch (error) {
    console.error("Error submitting application:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
