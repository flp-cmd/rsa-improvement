"use client";

import "animate.css";
import { useState, useRef, useEffect } from "react";
import { isValidEmail, isValidUSPhone } from "@/utils/validators";
import { services } from "@/utils/data";
import Image from "next/image";

export default function HeroSection() {
  const [result, setResult] = useState("");
  const [resultType, setResultType] = useState<"success" | "error" | "">("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const newHeight = Math.max(48, textarea.scrollHeight);
      textarea.style.height = `${newHeight}px`;
    }
  }, [formData.message]);

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.service.trim() !== "" &&
    formData.message.trim() !== "";

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      const filteredValue = value.replace(/[0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: filteredValue }));
    } else if (name === "phone") {
      const filteredValue = value.replace(/[^0-9+\-().\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: filteredValue }));
      setPhoneError(false);
    } else if (name === "email") {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setEmailError(false);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResult("");
    setResultType("");
    setEmailError(false);
    setPhoneError(false);

    if (!isValidEmail(formData.email)) {
      setResult("Please enter a valid email!");
      setResultType("error");
      setEmailError(true);
      setIsLoading(false);
      return;
    }

    if (!isValidUSPhone(formData.phone)) {
      setResult("Please enter a valid phone number!");
      setResultType("error");
      setPhoneError(true);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.body?.message ?? "Message sent successfully!");
        setResultType("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setEmailError(false);
        setPhoneError(false);
        if (textareaRef.current) {
          textareaRef.current.style.height = "auto";
        }
      } else {
        const errorMessage =
          data.body?.message ?? "Failed to send message. Please try again.";
        setResult(errorMessage);
        setResultType("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("Failed to send message. Please try again.");
      setResultType("error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult("");
        setResultType("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  return (
    <section id="home" className="relative pt-20 md:pt-20 bg-gray-50">
      {result && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg animate__animated animate__fadeInDown ${
            resultType === "error"
              ? "bg-red-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          <p className="text-sm md:text-base font-medium">{result}</p>
        </div>
      )}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="relative">
          <div className="pt-8 pb-4 text-center md:text-start md:pb-0 relative z-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-(--modern-green) font-black">
                Transforming
              </span>{" "}
              <span className="text-(--modern-black) font-bold">spaces,</span>
              <br />
              <span className="text-(--modern-green) font-black">
                exceeding
              </span>{" "}
              <span className="text-(--modern-black) font-bold">
                expectations.
              </span>
            </h1>
          </div>

          <div className="relative md:absolute md:top-35 md:right-6 lg:top-50 xl:top-8 xl:right-10 w-full md:w-[400px] lg:w-[400px] xl:w-[450px] mt-8 lg:mt-0 z-20">
            <div className="bg-(--harvest-gold) rounded-[16px] p-6 md:p-8 animate__animated animate__bounceInDown">
              <h2 className="text-white/95 text-2xl md:text-4xl font-extrabold text-center mb-2">
                Get a Free Quote
              </h2>
              <p className="text-white/90 text-center mb-6 text-sm md:text-xl">
                Reliable, affordable home services you can count on.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 ${
                      emailError
                        ? "border-2 border-red-500 focus:ring-red-500"
                        : "focus:ring-white"
                    }`}
                  />
                </div>

                <div>
                  <input
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 ${
                      phoneError
                        ? "border-2 border-red-500 focus:ring-red-500"
                        : "focus:ring-white"
                    }`}
                  />
                </div>

                <div className="relative" ref={dropdownRef}>
                  <input
                    type="hidden"
                    name="service"
                    value={formData.service}
                  />
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`cursor-pointer w-full px-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-white text-left flex items-center justify-between ${
                      formData.service === ""
                        ? "text-gray-500"
                        : "text-gray-900"
                    }`}
                  >
                    <span>
                      {formData.service === ""
                        ? "Choose a service"
                        : formData.service}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                      {services.map((value) => (
                        <button
                          key={value.number}
                          type="button"
                          onClick={() => handleServiceSelect(value.title)}
                          className={`cursor-pointer w-full px-4 py-3 text-left hover:bg-gray-200 transition-colors ${
                            formData.service === value.title
                              ? "bg-gray-50 text-gray-900 font-medium"
                              : "text-gray-900"
                          }`}
                        >
                          {value.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <textarea
                    ref={textareaRef}
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none overflow-hidden"
                    style={{ minHeight: "48px" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className={`w-full mx-auto bg-white text-(--modern-black) px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    !isFormValid
                      ? "opacity-60 cursor-not-allowed"
                      : "cursor-pointer hover:bg-gray-300 hover:scale-105 group"
                  }`}
                >
                  <span>{isLoading ? "Sending..." : "Send Message"}</span>
                  {!isLoading && (
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        !isFormValid ? "" : "group-hover:translate-x-1"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="hidden md:block relative mt-8 md:mt-12 rounded-lg overflow-hidden h-[600px]">
            <Image
              src="/flooring.jpg"
              alt="Flooring"
              fill
              preload
              loading="eager"
              className="relative w-full"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
