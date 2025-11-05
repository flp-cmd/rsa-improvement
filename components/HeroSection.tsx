"use client";

import { useState, useRef } from "react";

export default function HeroSection() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResult("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB_3_FORMS;

    if (!accessKey) {
      setResult("Error: API key not configured");
      setIsLoading(false);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        const successMessage = data.message || "Message sent successfully!";
        setResult(successMessage);

        setTimeout(() => {
          try {
            if (formRef.current) {
              formRef.current.reset();
            }
          } catch (resetError) {
            console.error("Error resetting form:", resetError);
          }
        }, 100);
      } else {
        const errorMessage =
          "Error: " + (data.message || "Failed to send message");
        setResult(errorMessage);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("Error: Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 md:pt-24 bg-gray-50"
      style={{
        backgroundImage: "url('/flooring.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50 lg:bg-black/30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white lg:text-black lg:bg-white/0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[var(--bright)]">Transforming</span>{" "}
              <span className="text-white">spaces,</span>
              <br />
              <span className="text-[var(--bright)]">exceeding</span>{" "}
              <span className="text-white">expectations.</span>
            </h1>
          </div>

          <div className="w-full">
            <div className="bg-[var(--primary)] rounded-lg p-6 md:p-8">
              <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">
                Get a Quote
              </h2>
              <p className="text-white text-center mb-6 text-sm md:text-base">
                Reliable, affordable home services you can count on.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white text-sm mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full cursor-pointer bg-white text-[var(--primary)] px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
                {result && (
                  <p
                    className={`text-center text-sm font-medium ${
                      result.includes("Error")
                        ? "text-red-200"
                        : "text-green-200"
                    }`}
                  >
                    {result}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
