import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-[#ff0000]">Heytt Satra</h2>
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#ff0000] text-sm sm:text-base my-1 text-gray-300"
            >
              {item.name}
            </button>
          ))}
        </nav>
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/your-github-username" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tarun-kaushik-553b441a4" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/coding_.master/" },
            { icon: <FaSquareXTwitter />, link: "https://x.com/your-twitter-username" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#ff0000] text-gray-300 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Heytt Satra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;