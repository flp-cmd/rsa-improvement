import Link from "next/link";
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
        <div className="hidden md:flex items-center justify-between h-16 md:h-20">
          <div className="hidden md:flex gap-6">
            <a href="#home">
              <img
                src="/rsa-improvement-logo.png"
                alt="RSA Logo"
                loading="eager"
                className="h-22 md:h-30 w-auto"
              />
            </a>

            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link
                href="#home"
                className="text-[var--header-black] hover:text-black transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-[var--header-black] hover:text-black transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="text-[var--header-black] hover:text-black transition-colors"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="text-[var--header-black] hover:text-black transition-colors"
              >
                Projects
              </Link>
            </nav>
          </div>

          <Link
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-(--harvest-gold) text-white px-5 py-3 rounded-[12px] hover:bg-(--harvest-gold-hover) transition-colors text-sm md:text-base"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex md:hidden items-center relative h-20">
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

          <img
            src="/rsa-improvement-logo.png"
            alt="RSA Logo"
            className="h-22 md:h-30 w-auto absolute left-1/2 -translate-x-1/2"
          />
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
