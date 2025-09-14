import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
 {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-black mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

     {/* Projects Grid */}
      <div className="grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-[#800000] bg-black bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-[rgba(255,0,0,0.5)] hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4 sm:p-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-xl"
                srcSet={`${project.image} 320w, ${project.image} 768w, ${project.image} 1024w`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-2 sm:pt-4 line-clamp-3 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#ff0000] text-xs sm:text-sm font-semibold text-gray-300 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-black bg-opacity-90 rounded-xl shadow-2xl max-w-3xl w-[90%] sm:w-3/4 h-[90vh] sm:h-[80vh] overflow-auto relative">
            <div className="flex justify-end p-4 sticky top-0 bg-black bg-opacity-90 z-10">
              <button
                onClick={handleCloseModal}
                className="text-white text-2xl sm:text-3xl font-bold hover:text-[#ff0000]"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col p-4 sm:p-6 lg:p-8">
              <div className="w-full flex justify-center mb-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-w-[90%] object-contain rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-1.5">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#930202] text-xs sm:text-sm font-semibold text-[#aeabab] rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 flex-col sm:flex-row">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-gray-800 hover:bg-[#800000] text-gray-400 px-4 sm:px-6 py-2 rounded-xl text-sm sm:text-base font-semibold text-center transition-colors duration-300"
                  >
                    View Code
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
