"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const faqs = [
    {
      question: "What areas does RSA Improvement serve?",
      answer:
        "We proudly serve the entire tri-state area, including New York, New Jersey, and Connecticut. If you're outside these regions, contact us — we often travel for larger renovation projects.",
    },
    {
      question: "Are estimates free?",
      answer:
        "Yes! RSA Improvement offers free, no-obligation estimates for all our services. We'll visit your property, discuss your goals, and provide a detailed quote so you know exactly what to expect.",
    },
    {
      question: "Do you provide both residential and commercial services?",
      answer:
        "Absolutely. Our team handles everything from small home improvement jobs to full-scale commercial renovations. Whether it's repainting an office or installing new floors in your home, we bring the same level of professionalism and attention to detail.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "It depends on the size and scope of the work. A single-room painting project can often be completed in one day, while full flooring installations or remodeling projects may take several days. We always provide a clear timeline before starting.",
    },
    {
      question: "Is your work insured and guaranteed?",
      answer:
        "Yes. RSA Improvement is fully licensed and insured, and all of our work comes with a satisfaction guarantee. If something isn't right, we'll make it right — your peace of mind is our priority.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
            <span className="text-gray-500 text-sm md:text-base">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Helpful Information for Homeowners
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl">
            Get quick answers to common questions about our home repair
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mr-auto items-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg transition-colors ${
                openIndex === index
                  ? "bg-[var(--primary)] text-white"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 md:p-6 flex items-center justify-between text-left cursor-pointer"
              >
                <span
                  className={`font-medium text-sm md:text-base ${
                    openIndex === index ? "text-white" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`text-xl md:text-2xl flex-shrink-0 ml-4 ${
                    openIndex === index ? "text-white" : "text-gray-600"
                  }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && faq.answer && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
