import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "blog", label: "Blog" },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] bg-black bg-opacity-50 backdrop-blur-md shadow-md"
    >
      <div className='text-white py-5 flex justify-between items-center'>
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#ff0000]">&lt;</span>
          <span className="text-white">Heytt</span>
          <span className="text-[#ff0000]">/</span>
          <span className="text-white">Satra</span>
          <span className="text-[#ff0000]">&gt;</span>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#ff0000] ${
                activeSection === item.id ? "text-[#ff0000]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/heytt-satra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#ff0000]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/heytt-satra/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#ff0000]"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/heyttsatra/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#ff0000]"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://x.com/satra_heytt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#ff0000]"
          >
            <FaSquareXTwitter size={24} />
          </a>
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#ff0000] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#ff0000] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#ff0000] ${
                  activeSection === item.id ? "text-[#ff0000]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/heytt-satra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ff0000]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/heytt-satra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ff0000]"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/heyttsatra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ff0000]"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://x.com/satra_heytt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ff0000]"
              >
                <FaSquareXTwitter size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;