import React from "react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/Heyttimage.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-8 lg:gap-12">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Heytt Satra
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#ff0000] leading-tight">
            <span className="text-white">I am </span>
            <TypeAnimation
              sequence={[
                "an Author",
                2000,
                "a Software Engineer",
                2000,
                "an AI/ML Developer",
                2000,
                "a Quantum Computing Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#ff0000]"
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a computer science student with a passion for 
            building at the intersection of technology and innovation. 
            My work spans full-stack development, machine learning, robotics, research and quantum computing,  
            including co-authoring chapters in books. 
            I’ve also been part of space robotics competitions such as International Rover Challenge, 
            Along side this, I'm aiming to create meaningful tech that shapes the future.
          </p>
          <a
            href="https://docs.google.com/document/d/1EBCSBOYNpufeVTlgFcVtclxL9e4cNbNW/edit?usp=drive_link&ouid=111392976395632128075&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #ff0000, #8b0000)",
              boxShadow: "0 0 2px #ff0000, 0 0 2px #ff0000, 0 0 40px #ff0000",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#800000] rounded-3xl overflow-hidden group relative mr-0 md:mr-8 lg:mr-12"
            style={{
              boxShadow: "0 10px 20px rgba(255, 0, 0, 0.5)",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <img
              src={profileImage}
              alt="Heytt Satra"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 group-hover:box-shadow-[0_20px_40px_rgba(255,0,0,0.9)]"
              style={{
                boxShadow: "none",
                transition: "box-shadow 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
