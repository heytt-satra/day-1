import React, { useState, useRef, useEffect } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 px-6 md:px-20 lg:px-32 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-crimson">Projects</span></h2>
        <div className="w-24 h-1.5 bg-crimson mx-auto rounded-full mb-6"></div>
      </motion.div>

      {/* Grid with consistent aspect ratios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onClick={setSelectedProject} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="w-full max-w-4xl bg-charcoal border border-glass-border rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Content - Same as before */}
                <div className="relative h-64 md:h-96">
                    <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent"></div>
                    <button 
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-crimson transition-colors z-10"
                    >
                        <FiX size={24} />
                    </button>
                </div>

                <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-crimson/10 text-crimson rounded-full text-sm font-medium border border-crimson/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-300 mb-8 leading-relaxed">{selectedProject.description}</p>
                    <a 
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white rounded-xl font-bold hover:bg-crimson-dark transition-colors"
                    >
                        <FiGithub /> View Code
                    </a>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
  
    const handleMouseMove = (e) => {
      if (!divRef.current || isFocused) return;
  
      const div = divRef.current;
      const rect = div.getBoundingClientRect();
  
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
  
    const handleFocus = () => {
      setIsFocused(true);
      setOpacity(1);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
      setOpacity(0);
    };
  
    const handleMouseEnter = () => {
      setOpacity(1);
    };
  
    const handleMouseLeave = () => {
      setOpacity(0);
    };
  
    return (
      <motion.div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        layoutId={`project-${project.id}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => onClick(project)}
        className="relative rounded-2xl overflow-hidden cursor-pointer border border-glass-border bg-charcoal/50 h-[400px] group"
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 51, 51, 0.15), transparent 40%)`,
          }}
        />
        
        <div className="absolute inset-0 z-0">
             <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-crimson transition-colors">{project.title}</h3>
            <p className="text-gray-400 line-clamp-2 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.slice(0,3).map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 border border-glass-border rounded bg-black/50 text-gray-300">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </motion.div>
    );
  };

export default Work;
