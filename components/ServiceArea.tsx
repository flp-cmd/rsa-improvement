export default function ServiceArea() {
  const locations = [
    {
      city: "New York, NY",
      address:
        "245 Madison Ave, Suite 302, Midtown Manhattan, New York, NY 10016",
    },
    {
      city: "Brooklyn, NY",
      address:
        "88 Bedford Ave, 2nd Floor, Willburg District, Brooklyn, NY 11222",
    },
    {
      city: "Queens, NY",
      address:
        "157-12 Northern Blvd, Unit B, Flushing Center, Queens, NY 11354",
    },
  ];

  return (
    <section id="contact" className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
            <span className="text-gray-500 text-sm md:text-base">
              Service Area
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Reliable Home Solutions for Every Neighborhood
              </h2>
            </div>
            <div>
              <p className="text-gray-600 text-base md:text-lg">
                Serving homeowners across these areas with reliable,
                professional repair and maintenance care.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 relative">
          <div className="bg-gray-100 rounded-lg overflow-hidden h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987368715491!3d40.69767006374158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="absolute bottom-4 left-4 right-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 md:p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  {location.city}
                </h3>
                <p className="text-gray-600 text-sm">{location.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-20">
          <div>
            <p className="text-gray-500 text-sm mb-2">Phone</p>
            <p className="text-xl md:text-2xl font-bold text-gray-900">
              (862) 237-4628
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-2">Email</p>
            <p className="text-xl md:text-2xl font-bold text-gray-900">
              contact@repaira.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
