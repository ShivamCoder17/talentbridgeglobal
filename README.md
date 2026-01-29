# TalentBridgeGlobal - Recruitment Agency Website

A complete, professional recruitment agency website built with Next.js 16 (App Router) and Tailwind CSS v4.

## Features

- ✅ **8 Complete Pages**: Home, About, Market Challenges & Solutions, Services, Jobs, Apply, Contact, Privacy Policy
- ✅ **Professional Corporate Design**: Clean, modern, and fully responsive
- ✅ **Job Application Form**: Full-featured form with validation and email submission
- ✅ **Email Integration**: Automatic email notifications for job applications
- ✅ **SEO Optimized**: Proper metadata, semantic HTML, and structured data
- ✅ **Dark Mode Support**: Automatic dark mode based on system preferences
- ✅ **TypeScript**: Full type safety throughout the application
- ✅ **Form Validation**: Client-side and server-side validation
- ✅ **File Upload**: Resume/CV upload with size and format validation

## Project Structure

```
talentbridgeglobal/
├── app/
│   ├── actions/
│   │   └── application.ts      # Server action for form submission
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── apply/
│   │   └── page.tsx            # Apply for job page
│   ├── challenges/
│   │   └── page.tsx            # Market Challenges & Solutions
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── jobs/
│   │   └── page.tsx            # Jobs listing page
│   ├── privacy-policy/
│   │   └── page.tsx           # Privacy Policy page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── layout.tsx              # Root layout with Navbar & Footer
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── components/
│   ├── ApplyForm.tsx           # Job application form component
│   ├── Footer.tsx              # Footer component
│   ├── JobCard.tsx             # Job listing card component
│   └── Navbar.tsx              # Navigation bar component
├── lib/
│   └── email.ts                # Email sending utility
├── .env.example                # Environment variables template
└── package.json                # Dependencies

```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd talentbridgeglobal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and configure your email settings:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   CLIENT_EMAIL=info@talentbridgeglobal.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Email Configuration

### Option 1: Gmail SMTP (Development)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Use the app password in `SMTP_PASSWORD`

### Option 2: Professional Email Service (Production)

For production, consider using:
- **Resend** (Recommended): https://resend.com
- **SendGrid**: https://sendgrid.com
- **AWS SES**: https://aws.amazon.com/ses/
- **Mailgun**: https://www.mailgun.com

Update `lib/email.ts` to use your preferred service.

## Form Fields

The application form includes:
- **Full Name** (required)
- **Email** (required, validated)
- **Phone** (required, validated)
- **Location** (required)
- **Job Applied For** (required, dropdown)
- **Resume/CV Upload** (required, PDF/DOC/DOCX, max 5MB)
- **Cover Letter** (optional, textarea)

## Form Submission Flow

1. User fills out the application form
2. Client-side validation checks all fields
3. Form data is sent to Server Action (`app/actions/application.ts`)
4. Server validates data and prepares email
5. Email is sent to client email address with:
   - Applicant details
   - Resume attachment
   - Cover letter
6. Success confirmation shown to user
7. Form resets automatically

## Customization

### Update Company Information

- **Company Name**: Update in `components/Navbar.tsx` and `components/Footer.tsx`
- **Contact Info**: Update in `app/contact/page.tsx`
- **Email**: Update `CLIENT_EMAIL` in `.env.local`

### Add More Jobs

Edit the `jobs` array in `app/jobs/page.tsx`:

```typescript
const jobs = [
  {
    id: "1",
    title: "Your Job Title",
    company: "Company Name",
    location: "City, State",
    type: "Full-time",
    description: "Job description here...",
  },
  // Add more jobs...
];
```

### Update Job Options in Form

Edit the `<select>` options in `components/ApplyForm.tsx`:

```typescript
<option value="Your Job Title">Your Job Title</option>
```

## Styling

The project uses Tailwind CSS v4 with:
- Custom color scheme via CSS variables
- Responsive design (mobile-first)
- Dark mode support
- Professional corporate styling

Customize colors in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

## SEO Optimization

Each page includes:
- Proper `<title>` tags
- Meta descriptions
- Semantic HTML structure
- Open Graph metadata (can be added)

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting platform

## Technologies Used

- **Next.js 16**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS v4**: Styling
- **Nodemailer**: Email sending
- **Server Actions**: Form handling

## License

Private - All rights reserved

## Support

For issues or questions, contact: info@talentbridgeglobal.com
