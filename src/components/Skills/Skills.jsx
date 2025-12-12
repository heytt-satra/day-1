import React from "react";
import { SkillsInfo } from "../../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-6 md:px-20 lg:px-32 relative"
  >
    {/* Section Title */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core <span className="text-crimson">Skills</span></h2>
      <div className="w-24 h-1.5 bg-crimson mx-auto rounded-full mb-6"></div>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        A collection of my technical expertise across various domains, constantly expanding as I explore new technologies.
      </p>
    </motion.div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {SkillsInfo.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="glass-panel p-8 hover:border-crimson/30 transition-colors duration-300"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
             <span className="w-2 h-8 bg-crimson rounded-full"></span>
             {category.title}
          </h3>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 51, 51, 0.1)" }}
                className="flex items-center gap-2 bg-charcoal/50 border border-glass-border px-4 py-2.5 rounded-xl cursor-default transition-colors group"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-6 h-6 object-contain group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
                />
                <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
