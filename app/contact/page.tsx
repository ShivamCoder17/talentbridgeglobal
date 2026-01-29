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
        <div className="mx-auto">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Have questions? We&apos;d love to hear from you. Send us a message and
              we&apos;ll respond as soon as possible.
            </p>
          </div>
          <div className="flex">
            <div className="w-[40%] p-4">
              <div className="space-y-6">
                <div>
                  <h2 className="mb-4 text-2xl font-semibold text-foreground">
                    Let's Build Strong Teams Together
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
                      connect@talentbridgeglobal.in
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                      +91 8007866214
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60%] p-4">
              <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="relative w-full rounded-xl border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-950 overflow-hidden shadow-2xl">
                  <iframe
                    src="https://forms.gle/4owG6YyNduYNMPb78"
                    title="Contact Form"
                    className="w-full rounded-lg outline-none border-none"
                    style={{
                      height: '1200px',
                      margin: 0
                    }}
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
