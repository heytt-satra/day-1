import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-20 lg:px-32 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education <span className="text-crimson">Journey</span></h2>
        <div className="w-24 h-1.5 bg-crimson mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The academic foundations that paved the way for my technical career.
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-crimson via-crimson/50 to-transparent transform md:-translate-x-1/2 ml-4 md:ml-0"></div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-0.5 md:left-1/2 top-0 w-4 h-4 rounded-full bg-crimson border-4 border-black transform -translate-x-1.5 md:-translate-x-1/2 ml-4 md:ml-0 z-10 shadow-[0_0_10px_rgba(255,51,51,0.8)]"></div>

              <div className={`ml-8 md:ml-0 w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "" : "md:text-right"}`}>
                 <div className="glass-panel p-6 md:p-8 hover:border-crimson/50 transition-all duration-300 group">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                       <div className="w-16 h-16 bg-white rounded-lg p-1 overflow-hidden shrink-0">
                           <img src={edu.img} alt={edu.school} className="w-full h-full object-contain" />
                       </div>
                       <div>
                           <h3 className="text-xl font-bold text-white group-hover:text-crimson transition-colors">{edu.school}</h3>
                           <h4 className="text-gray-400 font-medium">{edu.degree}</h4>
                       </div>
                    </div>
                    
                    <p className="text-sm text-crimson mb-4 font-mono">{edu.date}</p>
                    <p className="text-gray-300 font-semibold mb-2">Grade: {edu.grade}</p>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        {edu.desc}
                    </p>
                 </div>
              </div>
              
              <div className="hidden md:block w-[calc(50%-2rem)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
