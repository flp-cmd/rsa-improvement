import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Image
              src="/rsa-improvement-logo.png"
              alt="RSA Logo"
              width={120}
              height={40}
              className="h-10 md:h-26 w-auto"
            />
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
              className="hidden sm:flex items-center gap-2 bg-[var(--primary)] text-white px-4 py-2 rounded-full hover:bg-[var(--secondary)] transition-colors text-sm md:text-base"
            >
              Contact Us
            </Link>
            <button className="md:hidden text-gray-700 hover:text-black">
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
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
