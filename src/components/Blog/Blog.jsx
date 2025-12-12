import React, { useState, useEffect } from "react";
import { blogs as staticBlogs } from "../../constants";
import { motion } from "framer-motion";

const API_URL = 'http://localhost:3001/api';

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

  if (loading) return <div className="py-20 text-center text-gray-500">Loading insights...</div>;

  return (
    <section id="blogs" className="py-24 px-6 md:px-20 lg:px-32 relative">
     <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest <span className="text-crimson">Insights</span></h2>
        <div className="w-24 h-1.5 bg-crimson mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Sharing thoughts on technology, innovation, and the future of digital experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => handleBlogClick(blog.id)}
            className="group glass-panel rounded-2xl overflow-hidden cursor-pointer hover:border-crimson/50 transition-all duration-300"
          >
            {blog.image && (
              <div className="w-full h-56 overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2 py-1 rounded bg-crimson/20 text-crimson uppercase tracking-wider">
                  {blog.tags?.[0] || 'Tech'}
                </span>
                <span className="text-xs text-gray-500">{blog.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-crimson transition-colors leading-tight">
                {blog.title}
              </h3>

              <p className="text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                {blog.excerpt}
              </p>

              <div className="flex items-center justify-between border-t border-glass-border pt-4">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <span className="text-crimson text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read Article &rarr;
                  </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
