import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            text: "Heytt delivered a complex inventory management system 2 weeks ahead of schedule. His understanding of both the technical and business requirements was outstanding. The AI prediction module he added saved us 20% in waste costs.",
            author: "Sarah Jenkins",
            role: "CTO, LogisticsPro Solutions"
        },
        {
            text: "Working with Heytt on our rebrand was a game changer. He didn't just build a website; he built a digital experience that perfectly captures our company's ethos. Our leads increased by 150% in the first month.",
            author: "Michael Chen",
            role: "Founder, Chen & Co. Branding"
        },
        {
            text: "I was skeptical about AI integration, but Heytt made it seamless. The chatbot agent he developed handles 80% of our customer queries now. Highly recommended for any AI-driven development.",
            author: "Elena Rodriguez",
            role: "Operations Manager, FinTech Global"
        },
        {
            text: "Exceptional code quality and attention to detail. This is the third project we've hired Heytt for, and he consistently exceeds expectations. A true full-stack expert.",
            author: "David Park",
            role: "Product Lead, TechStart Inc."
        },
        {
            text: "Heytt helped me build my personal brand from scratch. His technical skills combined with design intuition are rare. The portfolio he built for me got me hired at a FAANG company.",
            author: "Jessica Wu",
            role: "Senior Designer"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 px-6 md:px-20 lg:px-32 relative bg-black overflow-hidden">
             
             {/* Background decorative elements */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-crimson/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20 relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client <span className="text-crimson">Stories</span></h2>
                <div className="w-24 h-1.5 bg-crimson mx-auto rounded-full mb-6"></div>
                <p className="text-gray-400">Real feedback from clients and partners.</p>
            </motion.div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="relative glass-panel rounded-3xl border border-glass-border p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
                    <div className="absolute top-8 left-8 text-crimson/20 text-6xl">
                        <FaQuoteLeft />
                    </div>

                    <div className="relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="text-center md:text-left md:pl-16"
                            >
                                <p className="text-xl md:text-2xl text-gray-200 italic mb-8 leading-relaxed font-light">
                                    "{testimonials[currentIndex].text}"
                                </p>
                                
                                <div className="flex items-center justify-center md:justify-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-crimson to-black flex items-center justify-center text-white font-bold border border-white/10">
                                        {testimonials[currentIndex].author[0]}
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].author}</h4>
                                        <p className="text-crimson text-sm font-medium">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center md:justify-end gap-3 mt-8 md:mt-0 md:absolute md:bottom-12 md:right-12">
                        <button 
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-crimson hover:border-crimson transition-all active:scale-95"
                        >
                            <FaChevronLeft />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-crimson hover:border-crimson transition-all active:scale-95"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex ? "w-8 bg-crimson" : "bg-gray-700 hover:bg-gray-500"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
