import { FaPhone } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Request Service",
      description:
        "Share your repair needs through our quick form or give us a call. We'll review your request and guide you to the right service.",
      highlighted: true,
    },
    {
      number: "02",
      title: "Get a Quote",
      description:
        "Our team provides a clear, upfront estimate so you know exactly what to expect — no hidden costs, just honest pricing.",
      highlighted: true,
    },
    {
      number: "03",
      title: "Schedule Visit",
      description:
        "Choose a date and time that works best for you, and we'll make sure our team arrives right on schedule.",
      highlighted: true,
    },
    {
      number: "04",
      title: "Professional Repair",
      description:
        "Our experienced technicians handle the job with care and efficiency, ensuring high-quality results that last.",
      highlighted: false,
    },
    {
      number: "05",
      title: "Follow-Up & Guarantee",
      description:
        "After the repair, we'll check in to make sure you're completely satisfied. Every service is backed by our quality guarantee.",
      highlighted: false,
    },
  ];

  return (
    <section id="how-it-works" className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[var(--harvest-gold)] rounded-full"></div>
              <span className="text-gray-500 text-sm md:text-base">
                How It Works
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Simple Steps to Get Your Home Fixed
            </h2>

            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
              From the beginning, we handle every step with attention, making
              sure your home repairs are completed smoothly without any
              unnecessary stress.
            </p>

            <div className="bg-gray-50 rounded-lg my-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Need some help deciding?
              </h3>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Talk to our team for quick guidance on your repair needs.
              </p>
              <a
                href="https://wa.me/18622374628"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--harvest-gold)] text-white px-6 py-3 rounded-full font-bold hover:bg-[var(--harvest-gold-hover)] transition-colors inline-flex items-center justify-center gap-2 w-35 md:w-auto"
              >
                <FaPhone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          <div className="relative">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 md:gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-sm md:text-base ${
                      step.highlighted
                        ? "bg-[var(--harvest-gold)] text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {step.number}
                  </div>
                  {step.highlighted &&
                    index < steps.filter((s) => s.highlighted).length - 1 && (
                      <div
                        className="mt-2 mb-2 h-full w-0.5"
                        style={{
                          background:
                            "repeating-linear-gradient(to bottom, transparent, transparent 4px, #dc2626 4px, #dc2626 8px)",
                        }}
                      ></div>
                    )}
                  {!step.highlighted && index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mt-2 mb-2"></div>
                  )}
                </div>

                <div className="flex-1 pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
