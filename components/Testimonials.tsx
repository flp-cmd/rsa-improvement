"use client";

import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah M, Homeowner",
      location: "Brooklyn, NY",
      text: "RSA Improvement completely transformed my living room! Their team was punctual, respectful, and paid incredible attention to detail when painting and installing new flooring. The results exceeded my expectations — my home feels brand new again. I highly recommend them for anyone looking for quality workmanship and reliable service.",
      date: "June 07, 2025",
      image: "/young-woman2.jpg",
    },
    {
      name: "David R, Property Manager",
      location: "Newark, US",
      text: "We've worked with RSA Improvement on multiple rental property renovations, and they've consistently delivered excellent results. From drywall repairs to custom trim work, everything is done efficiently and with care. It's rare to find a company that combines craftsmanship with such great communication. They're our go-to for any maintenance or upgrade projects.",
      date: "May 15, 2024",
      image: "/front-view-man-working-as-real-estate-agent.jpg",
    },
    {
      name: "Maria G, Business Owner",
      location: "Queens, NY",
      text: "RSA Improvement handled the flooring and painting for our office remodel, and the outcome was amazing. The crew was professional, tidy, and finished on schedule. The new look has made such a positive impression on our clients — I couldn't be happier with their service!",
      date: "April 22, 2025",
      image:
        "/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space.jpg",
    },
  ];

  return (
    <section className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[var(--harvest-gold)] rounded-full"></div>
            <span className="text-gray-500 text-sm md:text-base">
              Testimonial
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Homeowners Like You
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl">
            Because nothing speaks louder than the satisfaction of our happy
            customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mr-auto">
          <div className="flex flex-col gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left cursor-pointer p-4 md:p-6 md:pl-4 rounded-lg transition-colors ${
                  activeIndex === index
                    ? "bg-[var(--harvest-gold)] text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-1 h-12 flex-shrink-0 rounded ${
                      activeIndex === index
                        ? "bg-white"
                        : "bg-[var(--harvest-gold)]"
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
                  width={800}
                  height={400}
                />
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg shadow-sm mb-4">
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
