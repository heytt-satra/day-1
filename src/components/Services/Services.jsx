import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRobot, FaPaintBrush } from "react-icons/fa";

const Services = () => {
    const services = [
        {
            icon: <FaCode className="text-4xl text-crimson mb-4" />,
            title: "Custom Software",
            description: "Tailored full-stack solutions built to solve complex business problems. From scalable web apps to enterprise dashboards."
        },
        {
            icon: <FaRobot className="text-4xl text-crimson mb-4" />,
            title: "AI & ML Systems",
            description: "Intelligent systems that learn and adapt. Integrating LLMs, predictive models, and automation workflows."
        },
        {
            icon: <FaPaintBrush className="text-4xl text-crimson mb-4" />,
            title: "Personal & Company Branding",
            description: "Building powerful digital identities. I help founders and companies craft their unique voice and visual presence online."
        }
    ];

    return (
        <section id="services" className="py-24 px-6 md:px-20 lg:px-32 relative bg-black/50">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What I <span className="text-crimson">Do</span></h2>
                <div className="w-24 h-1.5 bg-crimson mx-auto rounded-full mb-6"></div>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    I build <span className="text-white font-semibold">Full Stack Custom Softwares</span>, <span className="text-white font-semibold">AI Systems</span>, and <span className="text-white font-semibold">Digital Brands</span>.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="glass-panel p-8 rounded-2xl border border-glass-border hover:border-crimson/50 transition-all duration-300 hover:-translate-y-2 group"
                    >
                        <div className="bg-crimson/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                           {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-crimson transition-colors">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
