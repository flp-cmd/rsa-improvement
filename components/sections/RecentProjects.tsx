import { projects } from "@/utils/data";
import Image from "next/image";

export default function RecentProjects() {
  return (
    <section id="projects" className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-(--harvest-gold) rounded-full"></div>
            <span className="text-gray-500 text-sm md:text-base">
              Our Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Recent Projects in Action
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl">
            {
              "Take a look at how we've been helping homeowners create safer, more comfortable spaces."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-64 md:h-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 text-xs md:text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Year</span> {project.year}
                      </div>
                      <div>
                        <span className="font-medium">Location</span>{" "}
                        {project.location}
                      </div>
                    </div>
                  </div>
                  <button className="bg-(--harvest-gold)] text-white px-6 py-3 rounded-lg font-bold hover:bg-(--harvest-gold-hover)] transition-colors w-full md:w-auto">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
