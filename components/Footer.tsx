"use client";

import Link from "next/link";

export default function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              Stay updated with repair tips, seasonal offers, and special
              discounts.
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 mb-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <button
                type="submit"
                className="cursor-pointer bg-[var(--primary)] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[var(--secondary)] transition-colors flex-shrink-0"
              >
                <svg
                  className="w-5 h-5"
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
              </button>
            </form>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="privacy" className="w-4 h-4" />
              <label htmlFor="privacy" className="text-sm text-gray-400">
                I agree to the{" "}
                <Link href="#" className="underline hover:text-white">
                  privacy statement
                </Link>
              </label>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Service Area
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-sm font-bold">FB</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-sm font-bold">IG</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <span className="text-sm font-bold">X</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 RSA Improvement
            </p>
            <p className="text-gray-400 text-sm">Powered by RSA Improvement</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
