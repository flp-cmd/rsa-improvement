import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-(--rich-black) text-white mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
          <div className="flex flex-col">
            <p className="text-(--harvest-gold-hover) text-2xl font-semibold">
              RSA IMPROVEMENT
            </p>
            <p className="text-gray-400 mt-2">
              At RSA Improvement, we understand the importance of having a
              beautiful and well-maintained home.
            </p>
          </div>

          <div className="flex flex-col">
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
                  href="https://docs.google.com/document/d/e/2PACX-1vR9wx7I4uOe9Y9m0WmvmMra9SoXdN3R4Y-anFqoaQ8cHFWM62DQDNULxddGM2fYr4MOZp5p2EC1HRKf/pub"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaPhone className="w-5 h-5 text-(--harvest-gold) mt-1 shrink-0 opacity-90" />
                <a
                  href="sms:+18622374628"
                  className="block md:hidden text-gray-400 hover:text-white transition-colors"
                >
                  (862) 237-4628
                </a>
                <a
                  href="tel:+18622374628"
                  className="hidden md:block text-gray-400 hover:text-white transition-colors"
                >
                  (862) 237-4628
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="w-5 h-5 text-(--harvest-gold) mt-1 shrink-0 opacity-90" />
                <span className="text-gray-400 wrap-break-word">
                  contact@rsaimprovement.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="w-5 h-5 text-(--harvest-gold) mt-1 shrink-0 opacity-90" />
                <span className="text-gray-400">Mon-Sat: 8:00AM-5:00PM</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:ml-12">
            <h4 className="font-bold mb-4">Follow Our Socials</h4>
            <div className="flex gap-3">
              <a
                href="https://web.facebook.com/rsaimprovement?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={25} />
              </a>
              <a
                href="https://www.instagram.com/rsaimprovement/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 RSA Improvement
            </p>
            <a
              href="https://www.linkedin.com/in/felipe-martinez-0b8568261/"
              target="_blank"
              className="text-gray-400 text-sm"
            >
              Developed by Felipe Martinez
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
