import { services } from "@/utils/data";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="bg-white scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-(--harvest-gold) rounded-full"></div>
            <span className="text-(--section-title) text-sm md:text-base font-semibold">
              Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Reliable Home Services You Can Count On
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl tracking-wider">
            A wide range of professional services tailored to keep your home
            safe, functional, and comfortable.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {index % 2 === 0 ? (
                    <>
                      {service.image && (
                        <div className="w-full md:w-1/2 h-64 md:h-70 order-1">
                          <Image
                            src={service.image}
                            alt={`${service.title} Image`}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between order-2">
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-2xl font-bold text-gray-400">
                              {service.number}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 mb-4 leading-relaxed tracking-wider">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between order-2 md:order-1">
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-2xl font-bold text-gray-400">
                              {service.number}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 mb-4 leading-relaxed tracking-wider">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      {service.image && (
                        <div className="w-full md:w-1/2 h-64 md:h-80 order-1 md:order-2">
                          <Image
                            src={service.image}
                            alt={`${service.title} Image`}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
