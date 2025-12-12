import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative pt-24 pb-12 px-6 md:px-20 lg:px-32 border-t border-glass-border bg-black/40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Contact CTA */}
        <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's <span className="text-crimson">Connect</span></h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Got a project in mind? Want to collaborate or just say hi? 
                I'm always open to new opportunities and ideas.
            </p>
            <a 
                href="mailto:heyttsatra17@gmail.com" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-crimson text-white rounded-full font-bold text-lg hover:bg-crimson-dark transition-all transform hover:scale-105 shadow-neon"
            >
                <HiMail size={24} />
                Say Hello
            </a>
        </div>

        {/* Navigation & Socials */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-glass-border pt-12 gap-8">
            <div className="text-2xl font-bold font-display cursor-pointer hover:scale-105 transition-transform">
                <span className="text-crimson">&lt;</span>
                <span className="text-white">Heytt</span>
                <span className="text-crimson">/</span>
                <span className="text-white">Satra</span>
                <span className="text-crimson">&gt;</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-8">
                {[
                    { name: "About", id: "about" },
                    { name: "Skills", id: "skills" },
                    { name: "Work", id: "work" },
                    { name: "Blog", id: "blogs" },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleScroll(item.id)}
                        className="text-gray-400 hover:text-crimson transition-colors text-sm font-medium uppercase tracking-wider"
                    >
                        {item.name}
                    </button>
                ))}
            </nav>

            <div className="flex gap-6">
                 {[
                    { icon: <FaGithub size={20} />, link: "https://github.com/heytt-satra" },
                    { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/heytt-satra/" },
                    { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/heyttsatra/" },
                    { icon: <FaSquareXTwitter size={20} />, link: "https://x.com/satra_heytt" },
                ].map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-crimson transition-colors transform hover:-translate-y-1"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </div>

        <div className="mt-12 text-sm text-gray-600">
            © {new Date().getFullYear()} Heytt Satra. Built with React & Tailwind.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
