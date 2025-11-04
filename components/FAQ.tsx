"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const faqs = [
    {
      question: "Do you offer warranties?",
      answer: "",
    },
    {
      question: "What payment methods do you accept?",
      answer: "",
    },
    {
      question: "How quickly can I book a service?",
      answer: "",
    },
    {
      question: "Are your technicians certified?",
      answer:
        "Absolutely! All our professionals are fully trained, certified, and equipped with the right tools and expertise to handle every repair with the highest level of safety, and care. Each team member is committed to delivering quality work, clear communication, and reliable results for your satisfaction.",
    },
    {
      question: "Do you provide emergency repair services?",
      answer: "",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
            <span className="text-gray-500 text-sm md:text-base">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Helpful Information for Homeowners
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Get quick answers to common questions about our home repair
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
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
                className="w-full p-4 md:p-6 flex items-center justify-between text-left"
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
