"use client";

import { useState, useRef } from "react";
import "animate.css";

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
      className="relative min-h-screen pt-20 md:pt-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="relative">
          <div className="pt-8 pb-4 text-center md:text-start md:pb-0 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[var(--modern-green)] font-black">
                Transforming
              </span>{" "}
              <span className="text-[var(--modern-black)] font-bold">
                spaces,
              </span>
              <br />
              <span className="text-[var(--modern-green)] font-black">
                exceeding
              </span>{" "}
              <span className="text-[var(--modern-black)] font-bold">
                expectations.
              </span>
            </h1>
          </div>

          <div className="relative md:absolute md:top-35 md:right-6 lg:top-50 xl:top-8 xl:right-10 w-full md:w-[400px] lg:w-[400px] xl:w-[450px] mt-8 lg:mt-0 z-20">
            <div className="bg-[var(--harvest-gold)] rounded-4xl p-6 md:p-8 animate__animated animate__bounceInDown">
              <h2 className="text-[var(--modern-black)] text-2xl md:text-4xl font-extrabold text-center mb-2">
                Get a Free Quote
              </h2>
              <p className="text-[var(--modern-black)] text-center mb-6 text-sm md:text-xl">
                Reliable, affordable home services you can count on.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[var(--modern-black)] text-sm mb-2">
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
                  <label className="block text-[var(--modern-black)] text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div>
                  <label className="block text-[var(--modern-black)] text-sm mb-2">
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
                  className="w-1/2 mx-auto block cursor-pointer bg-white text-[var(--modern-black)] px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

          <div className="relative mt-8 md:mt-12">
            <div
              className="relative w-full h-[600px] md:h-[600px] lg:h-[600px] rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('/flooring.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
