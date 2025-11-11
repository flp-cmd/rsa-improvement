import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      label: "Phone",
      value: "(862) 237-4628",
      link: "tel:+18622374628",
      accentColor: "--pale-green",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      label: "Email",
      value: "contact@rsaimprovement.com",
      link: null,
      accentColor: "--pale-blue",
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      label: "Working Hours",
      value: "Mon-Sat: 8:00AM-5:00PM",
      link: null,
      accentColor: "--mid-blue",
    },
  ];

  return (
    <section id="contact" className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-(--harvest-gold) rounded-full"></div>
            <span className="text-gray-500 text-sm md:text-base">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Reach out to us for any questions or inquiries about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
              {item.link ? (
                <a
                  href={item.link}
                  className="text-xl md:text-2xl font-bold text-gray-900 hover:text-(--pale-green) transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-xl md:text-2xl font-bold text-gray-900">
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
