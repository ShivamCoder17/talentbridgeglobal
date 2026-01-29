# Complete Setup Guide - TalentBridge Global Recruitment Website

## Overview

This is a complete, production-ready recruitment agency website built with Next.js 16 (App Router) and Tailwind CSS v4. All requirements have been implemented with professional corporate design, full form validation, and email integration.

## ✅ Requirements Completed

### Pages (8 Total)
1. ✅ **Home** (`app/page.tsx`) - Hero section, features, CTA
2. ✅ **About** (`app/about/page.tsx`) - Company information, mission, values
3. ✅ **Market Challenges & Solutions** (`app/challenges/page.tsx`) - Challenges and solutions
4. ✅ **Services** (`app/services/page.tsx`) - Service offerings
5. ✅ **Jobs** (`app/jobs/page.tsx`) - Job listings with JobCard components
6. ✅ **Apply for Job** (`app/apply/page.tsx`) - Application form page
7. ✅ **Contact** (`app/contact/page.tsx`) - Contact form and information
8. ✅ **Privacy Policy** (`app/privacy-policy/page.tsx`) - Privacy policy

### Components
- ✅ **Navbar** (`components/Navbar.tsx`) - Sticky navigation with all page links
- ✅ **Footer** (`components/Footer.tsx`) - Footer with links and company info
- ✅ **JobCard** (`components/JobCard.tsx`) - Reusable job listing card
- ✅ **ApplyForm** (`components/ApplyForm.tsx`) - Complete application form

### Form Features
- ✅ **Fields**: Full Name, Email, Phone, Location, Job Applied For, Resume Upload, Cover Letter
- ✅ **Validation**: Client-side and server-side validation
- ✅ **Email Submission**: Sends application details to client email
- ✅ **Success Confirmation**: Shows success message after submission
- ✅ **Error Handling**: Displays validation and submission errors
- ✅ **File Upload**: Resume/CV upload with size (5MB) and format validation

### Design & UX
- ✅ **Corporate Design**: Clean, professional, modern styling
- ✅ **Fully Responsive**: Mobile-first approach, works on all devices
- ✅ **Dark Mode**: Automatic dark mode support
- ✅ **SEO-Friendly**: Proper metadata, semantic HTML, structured content
- ✅ **Accessibility**: Proper labels, ARIA attributes, keyboard navigation

## Project Structure Explained

```
talentbridgeglobal/
│
├── app/                          # Next.js App Router directory
│   ├── actions/
│   │   └── application.ts       # Server Action for form submission
│   │
│   ├── about/
│   │   └── page.tsx            # About page component
│   │
│   ├── apply/
│   │   └── page.tsx            # Apply page wrapper
│   │
│   ├── challenges/
│   │   └── page.tsx            # Market Challenges & Solutions page
│   │
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   │
│   ├── jobs/
│   │   └── page.tsx            # Jobs listing page
│   │
│   ├── privacy-policy/
│   │   └── page.tsx           # Privacy Policy page
│   │
│   ├── services/
│   │   └── page.tsx            # Services page
│   │
│   ├── layout.tsx              # Root layout (includes Navbar & Footer)
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles & Tailwind imports
│
├── components/                  # Reusable React components
│   ├── ApplyForm.tsx           # Job application form (Client Component)
│   ├── Footer.tsx              # Footer component
│   ├── JobCard.tsx             # Job listing card component
│   └── Navbar.tsx              # Navigation bar component
│
├── lib/                         # Utility functions
│   └── email.ts                # Email sending logic using Nodemailer
│
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration (Tailwind)
├── README.md                   # Project documentation
├── SETUP.md                    # This file
└── tsconfig.json               # TypeScript configuration
```

## Step-by-Step Implementation Explanation

### 1. Project Setup & Configuration

**Files Created:**
- `package.json` - Added nodemailer and @types/nodemailer dependencies
- `tsconfig.json` - TypeScript configuration with path aliases (@/*)
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - Tailwind CSS v4 PostCSS plugin
- `.env.example` - Environment variables template

**Key Points:**
- Uses Next.js 16 with App Router (latest)
- Tailwind CSS v4 with PostCSS
- TypeScript for type safety
- Path aliases for clean imports (@/components, @/lib)

### 2. Layout & Navigation

**Files:**
- `app/layout.tsx` - Root layout with Navbar and Footer
- `components/Navbar.tsx` - Sticky navigation bar
- `components/Footer.tsx` - Footer with links

**Features:**
- Sticky navbar with backdrop blur
- Responsive navigation (mobile menu ready)
- Consistent branding across all pages
- Footer with organized links

### 3. Page Components

**Home Page (`app/page.tsx`):**
- Hero section with CTA buttons
- Features section (3 key benefits)
- Call-to-action section
- SEO metadata

**About Page (`app/about/page.tsx`):**
- Company introduction
- Mission statement
- Services overview
- Core values list

**Challenges Page (`app/challenges/page.tsx`):**
- 6 market challenges displayed in grid
- Solutions section
- Professional card-based layout

**Services Page (`app/services/page.tsx`):**
- 6 service offerings
- Icon-based cards
- CTA button

**Jobs Page (`app/jobs/page.tsx`):**
- Sample job listings (6 jobs)
- Filter buttons (ready for functionality)
- Grid layout with JobCard components
- Responsive 1/2/3 column grid

**Contact Page (`app/contact/page.tsx`):**
- Contact information
- Contact form (name, email, subject, message)
- Office hours display

**Privacy Policy (`app/privacy-policy/page.tsx`):**
- Complete privacy policy content
- Structured sections
- Professional legal content

### 4. Application Form Implementation

**Component: `components/ApplyForm.tsx`**

**Form Fields:**
1. **Full Name** - Text input, required
2. **Email** - Email input with validation, required
3. **Phone** - Tel input with validation, required
4. **Location** - Text input, required
5. **Job Applied For** - Select dropdown, required
6. **Resume/CV** - File upload (PDF, DOC, DOCX), max 5MB, required
7. **Cover Letter** - Textarea, optional

**Validation Logic:**
- Client-side validation before submission
- Real-time error display
- Email format validation
- Phone number format validation
- File size validation (5MB max)
- File type validation (PDF, DOC, DOCX)

**User Experience:**
- Loading state during submission
- Success message with auto-dismiss
- Error messages for each field
- Form reset after successful submission
- Disabled submit button during submission

### 5. Email Integration

**Server Action: `app/actions/application.ts`**
- Receives form data from client
- Validates all required fields
- Calls email sending function
- Returns success/error status

**Email Service: `lib/email.ts`**
- Uses Nodemailer for email sending
- Configurable SMTP settings
- HTML email template
- Plain text fallback
- Resume attachment support
- Error handling and logging

**Email Content Includes:**
- Applicant's full name
- Email address (clickable)
- Phone number (clickable)
- Location
- Job applied for
- Cover letter
- Resume attachment

### 6. Styling & Design

**Tailwind CSS v4 Features:**
- Custom color scheme via CSS variables
- Dark mode support
- Responsive utilities
- Professional spacing and typography
- Smooth transitions and hover effects

**Design Principles:**
- Clean, minimal corporate design
- Consistent spacing and typography
- Professional color palette
- Accessible contrast ratios
- Mobile-first responsive design

## Installation & Setup

### Step 1: Install Dependencies

```bash
npm install
```

This installs:
- Next.js 16.1.6
- React 19.2.3
- Tailwind CSS v4
- Nodemailer (for email)
- TypeScript
- ESLint

### Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your email settings:

   **For Gmail (Development):**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   CLIENT_EMAIL=info@talentbridgeglobal.com
   ```

   **To get Gmail App Password:**
   1. Enable 2-Factor Authentication
   2. Go to Google Account → Security → App Passwords
   3. Generate password for "Mail"
   4. Use that password in `SMTP_PASSWORD`

### Step 3: Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

### Step 4: Test Form Submission

1. Navigate to `/apply`
2. Fill out the form
3. Submit
4. Check your email inbox (CLIENT_EMAIL)

## Form Submission Flow

```
User fills form
    ↓
Client-side validation
    ↓
Form submitted to Server Action
    ↓
Server-side validation
    ↓
Email prepared with form data + resume
    ↓
Email sent via SMTP
    ↓
Success/Error response to client
    ↓
Success message displayed
    ↓
Form reset
```

## Customization Guide

### Change Company Name

1. `components/Navbar.tsx` - Line 8
2. `components/Footer.tsx` - Line 10
3. `app/layout.tsx` - Metadata title

### Update Contact Information

Edit `app/contact/page.tsx`:
- Email address
- Phone number
- Office hours

### Add More Jobs

Edit `app/jobs/page.tsx` - Add to `jobs` array:

```typescript
{
  id: "7",
  title: "New Job Title",
  company: "Company Name",
  location: "City, State",
  type: "Full-time",
  description: "Job description...",
}
```

### Update Job Options in Form

Edit `components/ApplyForm.tsx` - Add options to select:

```typescript
<option value="New Job Title">New Job Title</option>
```

### Change Email Recipient

Update `CLIENT_EMAIL` in `.env.local`:

```env
CLIENT_EMAIL=your-email@example.com
```

### Customize Colors

Edit `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

## Production Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Option 2: Other Platforms

The app works on any Node.js hosting:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

**Important:** Set environment variables in your hosting platform!

## Email Service Options

### Development (Current Setup)
- Gmail SMTP (configured)
- Mailtrap (for testing)

### Production (Recommended)
- **Resend** - https://resend.com (Best for Next.js)
- **SendGrid** - https://sendgrid.com
- **AWS SES** - https://aws.amazon.com/ses/
- **Mailgun** - https://www.mailgun.com

To switch services, update `lib/email.ts` with your preferred service's SDK.

## Troubleshooting

### Email Not Sending

1. Check environment variables are set correctly
2. Verify SMTP credentials
3. Check spam folder
4. Review server logs for errors
5. For Gmail: Ensure App Password is used (not regular password)

### Form Validation Errors

- Check browser console for JavaScript errors
- Verify all required fields are filled
- Check file size (must be < 5MB)
- Verify file format (PDF, DOC, DOCX)

### Build Errors

```bash
npm run build
```

Check for:
- TypeScript errors
- Missing dependencies
- Environment variables

## Next Steps

1. **Add Database** - Store applications in database (PostgreSQL, MongoDB)
2. **Admin Panel** - View and manage applications
3. **Email Templates** - Customize email design
4. **Job Management** - Admin interface to add/edit jobs
5. **User Authentication** - For job seekers and employers
6. **Search & Filters** - Advanced job search functionality
7. **Analytics** - Track form submissions, page views

## Support

For questions or issues:
- Check README.md for general information
- Review code comments for implementation details
- Contact: info@talentbridgeglobal.com

---

**Built with ❤️ using Next.js 16, React 19, TypeScript, and Tailwind CSS v4**
