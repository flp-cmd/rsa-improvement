"use client"

import { steps } from "@/utils/data";
import { FaPhone } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-(--harvest-gold) rounded-full"></div>
              <span className="text-(--section-title) text-sm md:text-base font-semibold">
                How It Works
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Simple Steps to Start Your Project
            </h2>

            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed tracking-wider">
              From safe demolition of the old floor to the flawless installation
              of the new, we handle every step with attention, ensuring your
              floor renovation is smooth, fast, and completely stress-free.
            </p>

            <div className="hidden md:block rounded-lg my-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Need some help deciding?
              </h3>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Talk to our specialized team for quick guidance on the best
                solution for your home.
              </p>
              <a
                href="https://wa.me/18622374628"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-(--harvest-gold) text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition-colors inline-flex items-center justify-center gap-2 w-35 md:w-auto"
              >
                <div className="flex gap-4 items-center">
                  <FaPhone className="w-4 h-4" />
                  <span className="font-normal text-[16px]">
                    Talk to an Expert
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 md:gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-sm md:text-base ${
                      step.accentColor
                        ? "text-white shadow-md"
                        : "bg-gray-100 text-gray-700"
                    }`}
                    style={
                      step.accentColor
                        ? { backgroundColor: `var(${step.accentColor})` }
                        : undefined
                    }
                  >
                    {step.number}
                  </div>
                  {step.highlighted &&
                    index < steps.filter((s) => s.highlighted).length - 1 && (
                      <div
                        className="mt-2 mb-2 h-full w-0.5"
                        style={
                          step.accentColor
                            ? {
                                background: `repeating-linear-gradient(to bottom, transparent, transparent 4px, var(${step.accentColor}) 4px, var(${step.accentColor}) 8px)`,
                              }
                            : undefined
                        }
                      ></div>
                    )}
                  {!step.highlighted && index < steps.length - 2 && (
                    <div className="w-0.5 h-full bg-black mt-2 mb-2"></div>
                  )}
                </div>

                <div className="flex-1 pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed tracking-wider">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="block md:hidden rounded-lg mt-6 px-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Need some help deciding?
            </h3>
            <p className="text-gray-700 mb-6 text-sm md:text-base">
              Talk to our specialized team for quick guidance on the best
              solution for your home.
            </p>
            <a
              href="https://wa.me/18622374628"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--harvest-gold) text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-colors inline-flex items-center justify-center gap-2 w-55 md:w-auto"
            >
              <div className="flex gap-4 items-center">
                <FaPhone className="w-4 h-4 opacity-80" />
                <span className="font-semibold text-[16px]">
                  Talk to an Expert
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
