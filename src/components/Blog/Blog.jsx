import React, { useState, useEffect } from "react";
import { blogs as staticBlogs } from "../../constants";
import { motion } from "framer-motion";

const API_URL = 'http://localhost:3000/api';

const Blogs = () => {
  const [blogs, setBlogs] = useState(staticBlogs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${API_URL}/blogs`);
      const data = await response.json();
      if (data.length > 0) {
        setBlogs(data);
      }
    } catch (err) {
      console.log("Using static blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleBlogClick = (blogId) => {
    window.open(`/blog/${blogId}`, '_blank');
  };

  if (loading) {
    return (
      <section id="blogs" className="py-16 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans">
        <div className="text-center">
          <div className="text-white">Loading blogs...</div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blogs"
      className="py-16 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-[#ff0000]">Blogs</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Sharing insights on technology, innovation, and my journey in software development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => handleBlogClick(blog.id)}
            className="bg-gradient-to-br from-[#1a0000] to-[#000000] border-2 border-[#800000] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] group"
          >
            {blog.image && (
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-[#ff0000] font-semibold">
                  {blog.date}
                </span>
                <span className="text-xs text-gray-500">{blog.readTime}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#ff0000] transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base line-clamp-3 mb-4">
                {blog.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags && blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#800000] bg-opacity-30 text-[#ff0000] text-xs rounded-full border border-[#800000]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-[#ff0000] font-semibold text-sm hover:underline">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
