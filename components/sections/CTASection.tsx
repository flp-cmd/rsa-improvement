import Image from "next/image";
import QuoteImage from "../.././public/quote-image.jpeg";

export default function CTASection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-(--harvest-gold) rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="h-64 md:h-80 lg:h-auto">
              <Image
                src={QuoteImage}
                alt="Professional repair service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Restore Comfort to Your Home?
              </h2>
              <p className="text-white text-base md:text-lg mb-8 leading-relaxed tracking-wide">
                Contact us today to discuss your flooring, demolition, or custom
                carpentry needs. We provide honest estimates and deliver
                guaranteed, high-quality service from experienced professionals.
              </p>
              <a
                href="#home"
                className="bg-white text-(--harvest-gold) gap-2 w-[200px] px-6 py-4 rounded-xl font-bold md:hover:bg-gray-300 md:hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get a Free Quote
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
