"use client";

import { useState, useRef, useEffect } from "react";
import "animate.css";

const services = [
  {
    number: "01",
    title: "Flooring Installation/Repairs",
    description:
      "Expert flooring installation and repair services for hardwood, engineered flooring, laminate, and luxury vinyl (LVP/LVT). We deliver precise, high-quality results for residential and commercial spaces using premium materials and modern techniques. Count on our skilled team for durable, elegant, and functional floors that transform your space with lasting beauty.",
    category: "Flooring Services",
    image: "/flooring.jpg",
    highlighted: true,
  },
  {
    number: "02",
    title: "Finish/Refinish",
    description:
      "Revitalize your hardwood floors with our expert finishing and refinishing services. We sand, stain, and seal with precision to restore beauty, enhance durability, and match your desired style. Whether refreshing worn floors or protecting new ones, our team delivers smooth, long-lasting, and elegant results that elevate any space.",
    category: "Flooring Services",
    highlighted: false,
    tags: ["Licensed Experts", "Water-Saving Solutions", "2+"],
  },
  {
    number: "03",
    title: "Modifications",
    description:
      "Enhance your space with our non-structural modification services. From room reconfigurations and partitions to new fixtures and cabinetry, we deliver efficient, detail-focused upgrades that improve functionality and style. Our team ensures precise, high-quality results that elevate your home or business without altering its structural integrity.",
    category: "Indoor Repairs",
    highlighted: false,
  },
  {
    number: "04",
    title: "Painting",
    description:
      "Refresh your home or business with our professional painting services. We use high-quality paints and expert techniques to deliver smooth, durable finishes for both interiors and exteriors. From prep to clean-up, every detail is handled with care and precision, ensuring efficient, long-lasting, and visually stunning results that transform your space.",
    category: "Indoor Repairs",
    highlighted: false,
  },
  {
    number: "05",
    title: "Drywall",
    description:
      "Achieve smooth, flawless walls with our expert drywall and plaster services. From new installations to precise repairs, our skilled team ensures seamless, durable finishes ready for painting or decoration. With attention to detail and high-quality craftsmanship, we deliver polished walls and ceilings that enhance the beauty and longevity of your home or business.",
    category: "Indoor Repairs",
    highlighted: false,
  },
  {
    number: "06",
    title: "Other Services",
    description:
      "In addition to our core services, we offer a variety of finishing and custom carpentry solutions, including trim work, baseboard installation, and crown molding. Our experienced team delivers exceptional craftsmanship and attention to detail, enhancing both the beauty and functionality of your space. We focus on efficient, high-quality results that create visually appealing, practical, and comfortable environments for your home or business.",
    category: "Custom & Finishing Work",
    highlighted: false,
  },
];

export default function HeroSection() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    setIsDropdownOpen(false);
  };

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
            setFormData({
              name: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            });
            if (textareaRef.current) {
              textareaRef.current.style.height = "auto";
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
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
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
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
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
                  disabled={isLoading || !isFormValid}
                  className="w-1/2 mx-auto block cursor-pointer bg-white text-[var(--modern-black)] px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group"
                >
                  <span>{isLoading ? "Sending..." : "Send Message"}</span>
                  {!isLoading && (
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
