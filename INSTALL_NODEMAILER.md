# Installing Nodemailer

The email functionality in this project uses `nodemailer` for sending emails. If you encounter errors about nodemailer not being found, follow these steps:

## Installation

### Option 1: Using npm (Recommended)

```bash
cd talentbridgeglobal
npm install nodemailer @types/nodemailer
```

### Option 2: If npm install fails due to cache issues

Try clearing npm cache first:

```bash
npm cache clean --force
npm install nodemailer @types/nodemailer
```

### Option 3: Manual installation

If the above doesn't work, try:

```bash
npm install --legacy-peer-deps nodemailer @types/nodemailer
```

## Current Status

The code has been updated to work **without** nodemailer installed. It will:
- Try to use nodemailer if available
- Fall back to logging application details to console if nodemailer is not found
- Still return success to the user (form submission works)

## After Installation

Once nodemailer is installed, configure your email settings in `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CLIENT_EMAIL=info@talentbridgeglobal.com
```

## Testing

After installing nodemailer and configuring environment variables:
1. Restart your development server: `npm run dev`
2. Submit a test application via the form
3. Check your email inbox (CLIENT_EMAIL address)

## Alternative Email Services

If you prefer not to use nodemailer, you can integrate:
- **Resend** (Recommended for Next.js): https://resend.com
- **SendGrid**: https://sendgrid.com
- **AWS SES**: https://aws.amazon.com/ses/
- **Mailgun**: https://www.mailgun.com

Update `lib/email.ts` to use your preferred service's SDK.
