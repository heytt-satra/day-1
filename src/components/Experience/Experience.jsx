import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-[#ff0000] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

{/* Experience Entries */}
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center justify-between ${
              index % 2 === 0 ? "" : "sm:flex-row-reverse"
            } relative`}
            style={{ zIndex: 1, minHeight: "200px" }}
          >
            {/* Connecting Horizontal Line */}
            <div
              className="hidden sm:block absolute w-24 sm:w-32 md:w-35.9 h-1 bg-white connecting-line z-10"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                left: index % 2 === 0 ? "calc(11% + 1rem)" : "auto",
                right: index % 2 === 0 ? "auto" : "calc(11% + 1rem)",
              }}
            >
              <div className="w-2 h-2 bg-[#000000] rounded-full absolute top-1/2 transform -translate-y-1/2 left-0"></div>
              <div className="w-2 h-2 bg-[#000000] rounded-full absolute top-1/2 transform -translate-y-1/2 right-0"></div>
            </div>

            {/* Company Logo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gray-800 rounded-lg overflow-hidden shadow-md shadow-[rgba(255,0,0,0.2)] mb-4 sm:mb-0 order-1 sm:order-none">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover"
                srcSet={`${experience.img} 320w, ${experience.img} 768w, ${experience.img} 1024w`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Content Section */}
            <div className="w-full sm:w-3/4 p-4 sm:p-6 rounded-xl border border-[#800000] bg-black bg-opacity-90 backdrop-blur-md shadow-lg shadow-[rgba(255,0,0,0.3)] transition-transform duration-300 hover:scale-102 order-2 sm:order-none">
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm sm:text-base text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-gray-400 leading-1.5">
                  {experience.desc}
                </p>
                <div className="mt-4">
                  <h5 className="text-white font-medium text-sm sm:text-base">
                    Skills:
                  </h5>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {experience.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-[#ff0000] text-gray-300 px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-[#800000] min-w-[44px] min-h-[44px] flex items-center justify-center"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
