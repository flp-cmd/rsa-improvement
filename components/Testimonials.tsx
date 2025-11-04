"use client";

import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Emma Jenson",
      location: "Brooklyn, NY",
      text: "Repaira took care of our leaking pipes quickly and efficiently. The technician was professional, and the entire experience was smooth and stress-free. I was really impressed with how fast they handled everything and will definitely call them again in the future.",
      date: "June 07, 2035",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070",
    },
    {
      name: "Gilbert Francis",
      location: "Newark, US",
      text: "Excellent service from start to finish. The team was punctual, professional, and got the job done right the first time. Highly recommend Repaira for any home repair needs.",
      date: "May 15, 2035",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
    },
    {
      name: "Anna Stone",
      location: "Queens, NY",
      text: "Outstanding workmanship and customer service. They fixed our electrical issues quickly and safely. The team was knowledgeable and explained everything clearly.",
      date: "April 22, 2035",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    },
  ];

  return (
    <section className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
            <span className="text-gray-500 text-sm md:text-base">
              Testimonial
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Homeowners Like You
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Because nothing speaks louder than the satisfaction of our happy
            customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left cursor-pointer p-4 md:p-6 rounded-lg transition-colors ${
                  activeIndex === index
                    ? "bg-[var(--primary)] text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-1 h-12 flex-shrink-0 rounded ${
                      activeIndex === index ? "bg-white" : "bg-[var(--primary)]"
                    }`}
                  ></div>
                  <div className="flex-1">
                    <h3
                      className={`font-bold text-base md:text-lg mb-1 ${
                        activeIndex === index ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      className={`text-sm md:text-base ${
                        activeIndex === index
                          ? "text-white/80"
                          : "text-gray-600"
                      }`}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover"
                  width={120}
                  height={40}
                />
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                    {testimonials[activeIndex].text}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[activeIndex].date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
