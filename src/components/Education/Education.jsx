import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-black mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold text-justify" >
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

{/* Education Entries */}
<div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
  {education.map((edu, index) => (
    <div
      key={edu.id}
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

      {/* School Logo */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gray-800 rounded-lg overflow-hidden shadow-md shadow-[rgba(255,0,0,0.2)] mb-4 sm:mb-0 order-1 sm:order-none">
        <img
          src={edu.img}
          alt={edu.school}
          className="w-full h-full object-cover"
          srcSet={`${edu.img} 320w, ${edu.img} 768w, ${edu.img} 1024w`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-3/4 p-4 sm:p-6 rounded-xl border border-[#800000] bg-black bg-opacity-90 backdrop-blur-md shadow-lg shadow-[rgba(255,0,0,0.3)] transition-transform duration-300 hover:scale-102 order-2 sm:order-none">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              {edu.degree}
            </h3>
            <h4 className="text-sm sm:text-base text-gray-300">
              {edu.school}
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {edu.date}
            </p>
          </div>
          <p className="text-sm sm:text-base text-gray-400 leading-1.5">
            Grade: {edu.grade}
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-1.5">
            {edu.desc}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default Education;
