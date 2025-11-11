import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-(--harvest-gold) rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="h-64 md:h-80 lg:h-auto">
              <Image
                src="/flooring.jpg"
                alt="Professional repair service"
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
            </div>
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Restore Comfort to Your Home?
              </h2>
              <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
                Book your service today and let our experts handle the job with
                care, efficiency, and reliable results — so you can sit back and
                relax.
              </p>
              <a
                href="#home"
                className="cursor-pointer bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 w-full md:w-auto justify-center"
              >
                Get a Free Quote
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
