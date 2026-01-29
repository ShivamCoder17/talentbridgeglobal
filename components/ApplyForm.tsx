"use client";

import { useState } from "react";
import { submitApplication } from "@/app/actions/application";

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  location?: string;
  jobAppliedFor?: string;
  resume?: string;
  general?: string;
}

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    jobAppliedFor: "",
    resume: null as File | null,
    coverLetter: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.jobAppliedFor.trim()) {
      newErrors.jobAppliedFor = "Please select a job position";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    } else if (formData.resume.size > 5 * 1024 * 1024) {
      newErrors.resume = "Resume file size must be less than 5MB";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrors({});

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("jobAppliedFor", formData.jobAppliedFor);
      formDataToSend.append("coverLetter", formData.coverLetter);
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      const result = await submitApplication(formDataToSend);

      if (result.success) {
        setSubmitStatus("success");
        // Reset form after success
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          location: "",
          jobAppliedFor: "",
          resume: null,
          coverLetter: "",
        });
        // Reset file input
        const fileInput = document.getElementById("resume") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        setSubmitStatus("error");
        setErrors({ general: result.error || "Failed to submit application. Please try again." });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrors({ general: "An unexpected error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-lg border px-4 py-3 text-sm text-foreground placeholder-zinc-400 focus:outline-none focus:ring-2 transition-colors ${
            errors.fullName
              ? "border-red-500 focus:ring-red-500"
              : "border-zinc-300 focus:border-foreground focus:ring-foreground dark:border-zinc-700 dark:bg-zinc-900"
          }`}
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.fullName}</p>
        )}
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-lg border px-4 py-3 text-sm text-foreground placeholder-zinc-400 focus:outline-none focus:ring-2 transition-colors ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-300 focus:border-foreground focus:ring-foreground dark:border-zinc-700 dark:bg-zinc-900"
            }`}
            placeholder="john.doe@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-lg border px-4 py-3 text-sm text-foreground placeholder-zinc-400 focus:outline-none focus:ring-2 transition-colors ${
              errors.phone
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-300 focus:border-foreground focus:ring-foreground dark:border-zinc-700 dark:bg-zinc-900"
            }`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Location */}
      <div>
        <label
          htmlFor="location"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-lg border px-4 py-3 text-sm text-foreground placeholder-zinc-400 focus:outline-none focus:ring-2 transition-colors ${
            errors.location
              ? "border-red-500 focus:ring-red-500"
              : "border-zinc-300 focus:border-foreground focus:ring-foreground dark:border-zinc-700 dark:bg-zinc-900"
          }`}
          placeholder="City, State/Country"
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.location}</p>
        )}
      </div>

      {/* Job Applied For */}
      <div>
        <label
          htmlFor="jobAppliedFor"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Job Applied For <span className="text-red-500">*</span>
        </label>
        <select
          id="jobAppliedFor"
          name="jobAppliedFor"
          value={formData.jobAppliedFor}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-lg border px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 transition-colors ${
            errors.jobAppliedFor
              ? "border-red-500 focus:ring-red-500"
              : "border-zinc-300 focus:border-foreground focus:ring-foreground dark:border-zinc-700 dark:bg-zinc-900"
          }`}
        >
          <option value="">Select a job position</option>
          <option value="Senior Software Engineer">Senior Software Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="UX Designer">UX Designer</option>
          <option value="Data Analyst">Data Analyst</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="Marketing Specialist">Marketing Specialist</option>
          <option value="Other">Other</option>
        </select>
        {errors.jobAppliedFor && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.jobAppliedFor}</p>
        )}
      </div>

      {/* Resume Upload */}
      <div>
        <label
          htmlFor="resume"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Resume/CV <span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className={`mt-1 block w-full text-sm text-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-foreground file:px-4 file:py-2 file:text-sm file:font-semibold file:text-background hover:file:bg-zinc-800 dark:file:hover:bg-zinc-200 transition-colors ${
            errors.resume ? "border-red-500" : ""
          }`}
        />
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          Accepted formats: PDF, DOC, DOCX (Max 5MB)
        </p>
        {errors.resume && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.resume}</p>
        )}
      </div>

      {/* Cover Letter */}
      <div>
        <label
          htmlFor="coverLetter"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows={6}
          value={formData.coverLetter}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-foreground placeholder-zinc-400 focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground dark:border-zinc-700 dark:bg-zinc-900 transition-colors"
          placeholder="Tell us why you're interested in this position and what makes you a great fit..."
        />
      </div>

      {/* Error Message */}
      {errors.general && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
          {errors.general}
        </div>
      )}

      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
          <p className="font-semibold mb-1">Application Submitted Successfully!</p>
          <p>Thank you for your interest. We&apos;ve received your application and will get back to you soon.</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-foreground px-6 py-4 text-base font-semibold text-background transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-zinc-200 shadow-lg hover:shadow-xl"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : (
          "Submit Application"
        )}
      </button>
    </form>
  );
}
