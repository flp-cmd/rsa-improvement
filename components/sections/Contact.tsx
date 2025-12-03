import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { ReactNode } from "react";

type ContactItem =
  | {
      icon: ReactNode;
      label: string;
      value: string;
      isPhone: true;
      accentColor: string;
    }
  | {
      icon: ReactNode;
      label: string;
      value: string;
      link: string | null;
      accentColor: string;
    };

export default function Contact() {
  const contactInfo: ContactItem[] = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      label: "Phone",
      value: "(862) 237-4628",
      isPhone: true,
      accentColor: "--pale-green",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      label: "Email",
      value: "contact@rsaimprovement.com",
      link: null,
      accentColor: "--mid-blue",
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      label: "Working Hours",
      value: "Mon-Sat: 8:00AM-5:00PM",
      link: null,
      accentColor: "--pale-blue",
    },
  ];

  return (
    <section id="contact" className="bg-white scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-(--harvest-gold) rounded-full"></div>
            <span className="text-(--section-title) text-sm md:text-base font-semibold">
              Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 text-base md:text-lg tracking-wider">
            Reach out to us for any questions or inquiries about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-2">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-4"
                style={{ backgroundColor: `var(${item.accentColor})` }}
              >
                {item.icon}
              </div>
              <p className="text-gray-500 text-sm mb-2">{item.label}</p>
              {"isPhone" in item && item.isPhone ? (
                <>
                  <a
                    href="sms:+18622374628"
                    className="block md:hidden text-xl md:text-2xl font-bold text-gray-900 hover:text-(--pale-green) transition-colors wrap-break-word overflow-wrap-anywhere"
                  >
                    {item.value}
                  </a>
                  <a
                    href="tel:+18622374628"
                    className="hidden md:block text-xl md:text-2xl font-bold text-gray-900 hover:text-(--pale-green) transition-colors wrap-break-word overflow-wrap-anywhere"
                  >
                    {item.value}
                  </a>
                </>
              ) : "link" in item && item.link ? (
                <a
                  href={item.link}
                  className="text-xl md:text-2xl font-bold text-gray-900 hover:text-(--pale-green) transition-colors wrap-break-word overflow-wrap-anywhere"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-xl md:text-2xl font-bold text-gray-900 wrap-break-word overflow-wrap-anywhere">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
