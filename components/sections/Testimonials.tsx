"use client";

import { testimonials } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-(--harvest-gold) rounded-full"></div>
            <span className="text-(--section-title) text-sm md:text-base font-semibold">
              Testimonial
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Homeowners Like You
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl tracking-wider">
            Because nothing speaks louder than the satisfaction of our happy
            customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 max-w-6xl mr-auto">
          <div className="flex flex-col gap-2 md:gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left cursor-pointer p-4 md:p-6 md:pl-4 rounded-lg transition-colors ${
                  activeIndex === index
                    ? "bg-(--harvest-gold) text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-1 h-12 shrink-0 rounded ${
                      activeIndex === index
                        ? "bg-white"
                        : "bg-(--harvest-gold)]"
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

          <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
            <div className="flex md:flex-row gap-6">
              <div className="shrink-0">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-22 h-22 md:w-40 md:h-40 rounded-md object-cover"
                  width={800}
                  height={400}
                />
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-md shadow-sm mb-4">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 tracking-wider">
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
