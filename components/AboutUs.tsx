export default function AboutUs() {
  return (
    <section id="about" className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4 md:gap-8 mb-12">
          <div className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0"></div>
          <div className="flex-1">
            <h2 className="text-gray-600 text-sm md:text-base font-medium mb-4">
              About Us
            </h2>
            <p className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-4xl">
              With over six years of experience in the construction and
              renovation industry, RSA Improvement has established itself as a
              trusted name for quality and reliability. Our commitment to
              excellence and customer satisfaction has driven us to continually
              refine our skills and expand our services. As we grow, we remain
              dedicated to providing exceptional craftsmanship and personalized
              service, helping our clients bring their visions to life.
            </p>

            <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-bold hover:bg-[var(--secondary)] transition-colors mb-12">
              Learn More
            </button>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 mb-12">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  4.9/5 Average Rating from 1,500+ homeowners
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                  372+
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Project Completed
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                  6+
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Years of Experience
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                  800+
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
