import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Blog", href: "#blogs" }, // Fixed link to match ID if possible, usually it's 'blog' or 'blogs'
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed left-0 right-0 z-50 transition-all duration-300 mx-auto ${
                scrolled 
                ? "top-4 w-[90%] max-w-5xl py-3 bg-black/60 backdrop-blur-xl border border-glass-border shadow-neon rounded-full" 
                : "top-0 w-full py-6 bg-transparent"
            }`}
        >
            <div className="px-6 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-xl md:text-2xl font-bold font-display tracking-tight group flex items-center gap-1">
                    <span className="text-crimson transition-transform group-hover:-translate-x-1">&lt;</span>
                    <span className="text-white">Heytt</span>
                    <span className="text-crimson">/</span>
                    <span className="text-white">Satra</span>
                    <span className="text-crimson transition-transform group-hover:translate-x-1">&gt;</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            className="text-gray-300 hover:text-crimson font-medium text-sm uppercase tracking-wider transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Socials Desktop */}
                 <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6">
                    <a href="https://github.com/heytt-satra" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/heytt-satra/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin /></a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </motion.nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center gap-8"
                >
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-3xl text-white font-bold hover:text-crimson transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="flex gap-8 mt-8">
                        <a href="https://github.com/heytt-satra" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-crimson text-2xl"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/heytt-satra/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-crimson text-2xl"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/heyttsatra/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-crimson text-2xl"><FaInstagram /></a>
                        <a href="https://x.com/satra_heytt" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-crimson text-2xl"><FaSquareXTwitter /></a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
};

export default Navbar;