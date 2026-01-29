"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitStatus("idle");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Have questions? We&apos;d love to hear from you. Send us a message and
              we&apos;ll respond as soon as possible.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-foreground">
                  Get in Touch
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Whether you&apos;re a job seeker looking for opportunities or an
                  employer seeking talent, we&apos;re here to help.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:info@talentbridgeglobal.com"
                    className="text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    info@talentbridgeglobal.com
                  </a>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Office Hours</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Monday - Friday: 9:00 AM - 6:00 PM EST
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-foreground placeholder-zinc-400 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground dark:border-zinc-700 dark:bg-zinc-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-foreground placeholder-zinc-400 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground dark:border-zinc-700 dark:bg-zinc-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-foreground placeholder-zinc-400 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground dark:border-zinc-700 dark:bg-zinc-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-foreground placeholder-zinc-400 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground dark:border-zinc-700 dark:bg-zinc-900"
                  />
                </div>
                {submitStatus === "success" && (
                  <div className="rounded-md bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-zinc-200"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
