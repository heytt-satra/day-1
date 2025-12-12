import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaImage } from "react-icons/fa";
import { motion } from "framer-motion";

const API_URL = 'http://localhost:3001/api';

const AdminPanel = () => {
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(initialBlogState());
  const [tagInput, setTagInput] = useState("");
  const [message, setMessage] = useState("");

  function initialBlogState() {
      return {
        title: "",
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        readTime: "5 min read",
        excerpt: "",
        tags: [],
        image: "",
        content: ""
      };
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${API_URL}/blogs`);
      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
        setCurrentBlog({ ...currentBlog, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSaveBlog = async () => {
    try {
      // Basic validation
      if (!currentBlog.title || !currentBlog.content) {
          setMessage("Title and Content are required");
          return;
      }

      // If ID exists, we are editing (though backend in this simple version treats POST as new add to top)
      // For this simple implementation, we'll just always POST new for now, or if we want edit, we need backend support for PUT
      // My backend only has POST (add new). Let's stick to adding new for simplicity or modify backend later.
      // Actually backend code showed: `newBlog.id = newBlog.id || Date.now(); blogs.unshift(newBlog);`
      // So editing an existing one would create a duplicate. 
      // I'll update backend logic later if needed, but for now let's assume "Create New".
      
      const response = await fetch(`${API_URL}/blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentBlog)
      });
      
      const data = await response.json();
      
      if (data) {
        fetchBlogs();
        handleCancelEdit();
        setMessage("Blog saved successfully!");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (err) {
      setMessage("Error saving blog");
    }
  };

  const handleCancelEdit = () => {
    setCurrentBlog(initialBlogState());
    setIsEditing(false);
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !currentBlog.tags.includes(tagInput.trim())) {
      setCurrentBlog({
        ...currentBlog,
        tags: [...currentBlog.tags, tagInput.trim()]
      });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag) => {
    setCurrentBlog({
      ...currentBlog,
      tags: currentBlog.tags.filter(t => t !== tag)
    });
  };

  const handleDeleteBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog? This action cannot be undone.")) return;

    try {
        const response = await fetch(`${API_URL}/blogs/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setMessage("Blog deleted successfully");
            fetchBlogs();
            setTimeout(() => setMessage(""), 3000);
        } else {
            setMessage("Failed to delete blog");
        }
    } catch (error) {
        console.error("Error deleting blog:", error);
        setMessage("Error deleting blog");
    }
  };

  return (
    <div className="min-h-screen bg-obsidian py-24 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-white">
            Blog <span className="text-crimson">Manager</span>
          </h1>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-6 py-3 bg-crimson rounded-lg text-white font-bold hover:bg-crimson-dark transition-all shadow-neon"
            >
              <FaPlus /> New Blog
            </button>
          )}
        </div>

        {message && (
             <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="mb-8 p-4 bg-crimson/20 border border-crimson text-white rounded-lg text-center"
            >
                {message}
             </motion.div>
        )}

        {isEditing ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-panel p-8 rounded-2xl border border-glass-border">
            <h2 className="text-2xl font-bold text-white mb-8">Create New Blog</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2 font-medium">Title</label>
                <input
                  type="text"
                  value={currentBlog.title}
                  onChange={(e) => setCurrentBlog({ ...currentBlog, title: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-glass-border rounded-lg text-white focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-colors"
                  placeholder="Enter blog title"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2 font-medium">Read Time</label>
                  <input
                    type="text"
                    value={currentBlog.readTime}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, readTime: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-glass-border rounded-lg text-white focus:border-crimson outline-none"
                    placeholder="e.g. 5 min read"
                  />
                </div>
                <div>
                    <label className="block text-gray-400 mb-2 font-medium">Tags</label>
                    <div className="flex gap-2">
                    <input
                        type="text"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                        className="flex-1 px-4 py-3 bg-black/50 border border-glass-border rounded-lg text-white focus:border-crimson outline-none"
                        placeholder="Add tag..."
                    />
                    <button onClick={handleAddTag} className="px-4 py-2 bg-crimson/20 text-crimson border border-crimson rounded-lg hover:bg-crimson hover:text-white transition-colors">Add</button>
                    </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                  {currentBlog.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-crimson/10 text-crimson text-sm rounded-full border border-crimson/20 flex items-center gap-2">
                      {tag}
                      <button onClick={() => handleRemoveTag(tag)} className="hover:text-white font-bold">×</button>
                    </span>
                  ))}
              </div>

              <div>
                <label className="block text-gray-400 mb-2 font-medium">Excerpt</label>
                <textarea
                  value={currentBlog.excerpt}
                  onChange={(e) => setCurrentBlog({ ...currentBlog, excerpt: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-glass-border rounded-lg text-white focus:border-crimson outline-none"
                  rows="2"
                  placeholder="Short preview..."
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2 font-medium">Cover Image</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="img-upload" />
                <label htmlFor="img-upload" className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-charcoal border border-glass-border rounded-lg text-white hover:border-crimson transition-colors">
                    <FaImage /> {currentBlog.image ? "Change Image" : "Upload Image"}
                </label>
                {currentBlog.image && (
                  <div className="mt-4">
                    <img src={currentBlog.image} alt="Preview" className="h-40 w-auto object-cover rounded-lg border border-glass-border" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-gray-400 mb-2 font-medium">Content (Markdown)</label>
                <textarea
                  value={currentBlog.content}
                  onChange={(e) => setCurrentBlog({ ...currentBlog, content: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-glass-border rounded-lg text-white focus:border-crimson outline-none font-mono text-sm leading-relaxed"
                  rows="15"
                  placeholder="# Heading&#10;Write your content here..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSaveBlog}
                  className="px-8 py-3 bg-crimson rounded-lg text-white font-bold hover:bg-crimson-dark transition-colors shadow-neon"
                >
                  <FaSave className="inline mr-2" /> Publish Blog
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="px-8 py-3 bg-transparent border border-gray-600 rounded-lg text-gray-300 hover:border-white hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.length === 0 ? (
                <div className="col-span-2 text-center text-gray-500 py-12">No blogs found. Start writing!</div>
            ) : blogs.map((blog) => (
              <div
                key={blog.id}
                className="glass-panel p-6 rounded-xl border border-glass-border hover:border-crimson/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
                        <p className="text-crimson/80 text-sm font-medium">{blog.date}</p>
                    </div>
                    <button 
                        onClick={() => handleDeleteBlog(blog.id)}
                        className="p-2 text-gray-400 hover:text-crimson hover:bg-crimson/10 rounded-lg transition-colors"
                        title="Delete Blog"
                    >
                        <FaTrash />
                    </button>
                </div>
                <p className="text-gray-400 mb-4 line-clamp-2 text-sm">{blog.excerpt}</p>
                <div className="flex gap-2 text-sm text-gray-500">
                   <span className="italic">ID: {blog.id}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
