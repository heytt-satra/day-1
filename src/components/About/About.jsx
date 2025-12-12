import React from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/Heyttimage.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-12 lg:py-0"
    >
      {/* Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-obsidian to-black z-0"></div>
      
      {/* Animated Spotlight/Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-crimson/10 blur-[150px] rounded-full pointer-events-none animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left: Typography & Content */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
        >
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-glass-bg backdrop-blur-md mb-8"
            >
                <span className="w-2 h-2 rounded-full bg-crimson animate-ping"></span>
                <span className="text-gray-300 text-sm tracking-widest uppercase">Innovating the Future</span>
            </motion.div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                HEYTT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-white">SATRA</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
                Crafting <span className="text-white font-medium">Full Stack Architectures</span> & <span className="text-white font-medium">Intelligent AI Systems</span> that define the next era of digital interaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a href="#work" className="group relative px-8 py-4 bg-crimson text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,51,51,0.4)]">
                    <span className="relative z-10">View Productions</span>
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12"></div>
                </a>
                <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm">
                    Let's Talk
                </a>
            </div>
        </motion.div>

        {/* Right: Visual Centerpiece */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2 }}
            className="flex-1 relative flex justify-center items-center"
        >
            {/* Main Image Container */}
            <div className="relative w-[300px] sm:w-[400px] lg:w-[500px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
                <img 
                    src={profileImage} 
                    alt="Heytt S Satra" 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2s]"
                />
                
                {/* Floating Tech Badges */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 left-8 z-20 px-4 py-2 bg-black/60 backdrop-blur-md border border-glass-border rounded-lg"
                >
                    <span className="text-crimson font-mono text-xs">AI ENGINEER</span>
                </motion.div>
                 <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-8 right-8 z-20 px-4 py-2 bg-black/60 backdrop-blur-md border border-glass-border rounded-lg"
                >
                    <span className="text-white font-mono text-xs">FULL STACK</span>
                </motion.div>
            </div>

            {/* Background Decorative Rings */}
            <div className="absolute -z-10 w-[120%] h-[120%] border border-crimson/10 rounded-full animate-spin-slow"></div>
            <div className="absolute -z-10 w-[150%] h-[150%] border border-crimson/5 rounded-full animate-spin-reverse-slow"></div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 tracking-widest">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-crimson to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default About;
