import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs as staticBlogs } from "../../constants";
import { FaArrowLeft, FaClock, FaCalendar } from "react-icons/fa";

const API_URL = 'http://localhost:3001/api';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`${API_URL}/blogs/${id}`);
      if (response.ok) {
        const data = await response.json();
        setBlog(data);
      } else {
        const staticBlog = staticBlogs.find((b) => b.id === parseInt(id));
        setBlog(staticBlog);
      }
    } catch (err) {
      const staticBlog = staticBlogs.find((b) => b.id === parseInt(id));
      setBlog(staticBlog);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-[#ff0000] hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1a0000]">
      <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-[#800000]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-300 hover:text-[#ff0000] transition-colors duration-300"
          >
            <FaArrowLeft />
            <span className="font-semibold">Back to Portfolio</span>
          </button>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <FaCalendar className="text-[#ff0000]" />
              <span>{blog.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <FaClock className="text-[#ff0000]" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#800000] bg-opacity-30 text-[#ff0000] text-sm rounded-full border border-[#800000] hover:bg-opacity-50 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {blog.image && (
            <div className="w-full rounded-xl overflow-hidden border-2 border-[#800000] shadow-[0_0_30px_rgba(255,0,0,0.3)] mb-8">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </header>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="text-xl text-gray-400 mb-8 pb-8 border-b border-[#800000] italic leading-relaxed">
            {blog.excerpt}
          </div>

          <div className="space-y-6">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-300 text-lg leading-relaxed text-justify"
                style={{ 
                  textIndent: index === 0 ? '0' : '0',
                  marginBottom: '1.5rem'
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t-2 border-[#800000]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-2">Written by</p>
              <p className="text-white text-xl font-bold">Heytt S Satra</p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #ff0000, #8b0000)",
                boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)",
              }}
            >
              View More Articles
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
