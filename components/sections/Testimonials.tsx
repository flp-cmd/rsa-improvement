import { testimonials } from "@/utils/data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-(--harvest-gold) rounded-full"></div>
            <span className="text-(--section-title) text-sm md:text-base font-semibold">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Homeowners Like You
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl tracking-wider">
            Because nothing speaks louder than the satisfaction of our happy
            customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mr-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg flex flex-col justify-between gap-8 shadow-md p-6 md:p-8 md:hover:shadow-2xl md:hover:scale-105 md:transition-all md:duration-300"
            >
              <p className="text-(--text-gray) text-sm">{`"${item.text}"`}</p>
              <div className="flex gap-4">
                <Image
                  src={item.image}
                  alt={item.image}
                  width={800}
                  height={800}
                  className="w-[60px] h-[60px] rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-(--rich-black) text-sm font-bold">
                    {item.name}
                  </p>
                  <p className="text-(--text-gray) text-sm">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
