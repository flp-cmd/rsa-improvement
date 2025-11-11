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
    <section id="service-area" className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-(--harvest-gold) rounded-full"></div>
            <span className="text-gray-500 text-sm md:text-base">
              Service Area
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Reliable Home Solutions for Every Neighborhood
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Serving homeowners across these areas with reliable, professional
            repair and maintenance care.
          </p>
        </div>

        <div className="mb-12 relative">
          <div className="bg-gray-100 rounded-lg overflow-hidden h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1r5Did6UxbJ5ewrFWCDcmVi41jsSYCwk&ehbc=2E312F"
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
      </div>
    </section>
  );
}
