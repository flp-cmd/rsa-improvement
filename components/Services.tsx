"use client";

import Image from "next/image";
import { useState } from "react";

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Outdoor Maintenance",
    "Indoor Repairs",
    "Specialized Services",
  ];

  const services = [
    {
      number: "01",
      title: "Electrical Services",
      description:
        "Safe and efficient solutions for wiring, lighting, and outlet repairs. Our certified electricians ensure reliable performance and lasting safety in every home.",
      category: "Indoor Repairs",
      highlighted: false,
    },
    {
      number: "02",
      title: "Plumbing Repairs",
      description:
        "From leaky faucets to pipe issues, our plumbers deliver quick, reliable fixes that keep your water systems running smoothly.",
      category: "Indoor Repairs",
      highlighted: true,
      image:
        "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070",
      tags: ["Licensed Experts", "Water-Saving Solutions", "2+"],
    },
    {
      number: "03",
      title: "Painting & Finishing",
      description:
        "Transform your interiors with smooth finishes and premium materials. We deliver vibrant colors and durable results that refresh your space beautifully.",
      category: "Indoor Repairs",
      highlighted: false,
    },
  ];

  const filteredServices =
    activeFilter === "All"
      ? services
      : services.filter((service) => service.category === activeFilter);

  return (
    <section id="services" className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
            <span className="text-gray-500 text-sm md:text-base">Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Reliable Home Services You Can Count On
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl">
            A wide range of professional services tailored to keep your home
            safe, functional, and comfortable.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-[var(--primary)] text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredServices.map((service, index) => (
            <div key={index}>
              {service.highlighted ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {service.image && (
                      <div className="w-full md:w-1/2 h-64 md:h-auto">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-2xl font-bold text-gray-400">
                            {service.number}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags?.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-bold hover:bg-[var(--secondary)] transition-colors w-full md:w-auto">
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-2xl md:text-3xl font-bold text-gray-400 flex-shrink-0">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
