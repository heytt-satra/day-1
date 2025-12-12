import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-20 lg:px-32 relative">
      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work <span className="text-crimson">Experience</span></h2>
        <div className="w-24 h-1.5 bg-crimson mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My professional journey and the roles I have embraced.
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-crimson via-crimson/50 to-transparent transform md:-translate-x-1/2 ml-4 md:ml-0"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0.5 md:left-1/2 top-0 w-4 h-4 rounded-full bg-crimson border-4 border-black transform -translate-x-1.5 md:-translate-x-1/2 ml-4 md:ml-0 z-10 shadow-[0_0_10px_rgba(255,51,51,0.8)]"></div>

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "" : "md:text-right"}`}>
                 <div className="glass-panel p-6 md:p-8 hover:border-crimson/50 transition-all duration-300 group">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                       <div className="w-12 h-12 bg-white rounded-lg p-1 overflow-hidden shrink-0">
                           <img src={exp.img} alt={exp.company} className="w-full h-full object-contain" />
                       </div>
                       <div>
                           <h3 className="text-xl font-bold text-white group-hover:text-crimson transition-colors">{exp.role}</h3>
                           <h4 className="text-gray-400 font-medium">{exp.company}</h4>
                       </div>
                    </div>
                    
                    <p className="text-sm text-crimson mb-4 font-mono">{exp.date}</p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                        {exp.desc}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"}`}>
                        {exp.skills.map((skill, idx) => (
                            <span key={idx} className="text-xs px-3 py-1 rounded-full bg-crimson/10 text-crimson border border-crimson/20">
                                {skill}
                            </span>
                        ))}
                    </div>
                 </div>
              </div>
              
              {/* Empty Spacer for alternating layout */}
              <div className="hidden md:block w-[calc(50%-2rem)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
