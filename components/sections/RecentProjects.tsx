import { projects } from "@/utils/data";
import Image from "next/image";

export default function RecentProjects() {
  return (
    <section id="projects" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-(--harvest-gold) rounded-full"></div>
            <span className="text-(--section-title) text-sm md:text-base font-semibold">
              Our Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Recent Projects in Action
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl tracking-wider">
            {
              "Take a look at how we've been helping homeowners transform their spaces with quality craftsmanship and lasting comfort."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col xl:flex-row">
                <div className="w-full md:w-full p-4 md:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group rounded-xl overflow-hidden shadow-md">
                      <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full z-10 pointer-events-none">
                        Before
                      </span>
                      <Image
                        src={project.beforeImage}
                        alt={`${project.title} before service`}
                        className="w-full h-56 md:h-100 object-cover transition-transform duration-300 group-hover:scale-105"
                        width={600}
                        height={450}
                      />
                    </div>
                    <div className="relative group rounded-xl overflow-hidden shadow-md">
                      <span className="absolute top-3 left-3 bg-(--harvest-gold) text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full z-10 pointer-events-none">
                        After
                      </span>
                      <Image
                        src={project.afterImage}
                        alt={`${project.title} after service`}
                        className="w-full h-56 md:h-100 object-cover transition-transform duration-300 group-hover:scale-105"
                        width={600}
                        height={450}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-1/3 p-6 md:p-8 md:gap-6 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed tracking-wider">
                    {project.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium">Year</span> {project.year}
                    </div>
                    <div>
                      <span className="font-medium">Location</span>{" "}
                      {project.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
