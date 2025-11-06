"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#home">
              <Image
                src="/rsa-improvement-logo.png"
                alt="RSA Logo"
                width={420}
                height={400}
                className="h-16 md:h-26 w-auto"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="#home"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-black transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Projects
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden md:flex items-center gap-2 bg-[var(--harvest-gold)] text-white px-4 py-2 rounded-full hover:bg-[var(--harvest-gold-hover)] transition-colors text-sm md:text-base"
            >
              Contact Us
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-black"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="flex flex-col py-4 space-y-4">
              <Link
                href="#home"
                onClick={closeMenu}
                className="text-gray-700 hover:text-black transition-colors px-4 py-2"
              >
                Home
              </Link>
              <Link
                href="#about"
                onClick={closeMenu}
                className="text-gray-700 hover:text-black transition-colors px-4 py-2"
              >
                About Us
              </Link>
              <Link
                href="#services"
                onClick={closeMenu}
                className="text-gray-700 hover:text-black transition-colors px-4 py-2"
              >
                Services
              </Link>
              <Link
                href="#projects"
                onClick={closeMenu}
                className="text-gray-700 hover:text-black transition-colors px-4 py-2"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="text-gray-700 hover:text-black transition-colors px-4 py-2"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
