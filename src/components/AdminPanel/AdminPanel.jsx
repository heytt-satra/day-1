import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaImage } from "react-icons/fa";

const API_URL = 'http://localhost:3000/api';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({
    title: "",
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    readTime: "5 min read",
    excerpt: "",
    tags: [],
    image: "",
    content: ""
  });
  const [tagInput, setTagInput] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      fetchBlogs();
    }
  }, [isAuthenticated]);

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsAuthenticated(true);
        setError("");
      } else {
        setError("Invalid password");
      }
    } catch (err) {
      setError("Connection error. Make sure the server is running.");
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${API_URL}/blogs`);
      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append('image', file);
    formData.append('password', password);

    try {
      const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setCurrentBlog({ ...currentBlog, image: data.url });
      }
    } catch (err) {
      setError("Error uploading image");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSaveBlog = async () => {
    try {
      const url = currentBlog.id !== undefined 
        ? `${API_URL}/blogs/${currentBlog.id}`
        : `${API_URL}/blogs`;
      
      const method = currentBlog.id !== undefined ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, blog: currentBlog })
      });
      
      const data = await response.json();
      
      if (data.success) {
        fetchBlogs();
        handleCancelEdit();
      }
    } catch (err) {
      setError("Error saving blog");
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const response = await fetch(`${API_URL}/blogs/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      
      if (response.ok) {
        fetchBlogs();
      }
    } catch (err) {
      setError("Error deleting blog");
    }
  };

  const handleEditBlog = (blog) => {
    setCurrentBlog(blog);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setCurrentBlog({
      title: "",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: "5 min read",
      excerpt: "",
      tags: [],
      image: "",
      content: ""
    });
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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-[#1a0000] flex items-center justify-center px-4">
        <div className="bg-[#1a0000] border-2 border-[#800000] rounded-xl p-8 max-w-md w-full">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Admin <span className="text-[#ff0000]">Login</span>
          </h2>
          {error && (
            <div className="mb-4 p-3 bg-red-900 bg-opacity-30 border border-red-500 rounded text-red-300 text-sm">
              {error}
            </div>
          )}
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full px-4 py-3 mb-4 bg-black border-2 border-[#800000] rounded-lg text-white focus:border-[#ff0000] focus:outline-none"
          />
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-lg text-white font-semibold transition-all duration-300"
            style={{
              background: "linear-gradient(90deg, #ff0000, #8b0000)",
              boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)",
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1a0000] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Blog <span className="text-[#ff0000]">Manager</span>
          </h1>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300"
              style={{
                background: "linear-gradient(90deg, #ff0000, #8b0000)",
                boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)",
              }}
            >
              <FaPlus /> New Blog
            </button>
          )}
        </div>

        {isEditing ? (
          <div className="bg-[#1a0000] border-2 border-[#800000] rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {currentBlog.id !== undefined ? 'Edit Blog' : 'Create New Blog'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Title</label>
                <input
                  type="text"
                  value={currentBlog.title}
                  onChange={(e) => setCurrentBlog({ ...currentBlog, title: e.target.value })}
                  className="w-full px-4 py-3 bg-black border-2 border-[#800000] rounded-lg text-white focus:border-[#ff0000] focus:outline-none"
                  placeholder="Enter blog title"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-2">Date</label>
                  <input
                    type="text"
                    value={currentBlog.date}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, date: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-[#800000] rounded-lg text-white focus:border-[#ff0000] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Read Time</label>
                  <input
                    type="text"
                    value={currentBlog.readTime}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, readTime: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-[#800000] rounded-lg text-white focus:border-[#ff0000] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Excerpt</label>
                <textarea
                  value={currentBlog.excerpt}
                  onChange={(e) => setCurrentBlog({ ...currentBlog, excerpt: e.target.value })}
                  className="w-full px-4 py-3 bg-black border-2 border-[#800000] rounded-lg text-white focus:border-[#ff0000] focus:outline-none"
                  rows="3"
                  placeholder="Short preview of your blog"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Tags</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                    className="flex-1 px-4 py-2 bg-black border-2 border-[#800000] rounded-lg text-white focus:border-[#ff0000] focus:outline-none"
                    placeholder="Add a tag and press Enter"
                  />
                  <button
                    onClick={handleAddTag}
                    className="px-4 py-2 bg-[#800000] text-white rounded-lg hover:bg-[#ff0000] transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentBlog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#800000] bg-opacity-30 text-[#ff0000] text-sm rounded-full border border-[#800000] flex items-center gap-2"
                    >
                      {tag}
                      <button onClick={() => handleRemoveTag(tag)} className="hover:text-white">
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Cover Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex items-center gap-2 px-4 py-3 bg-[#800000] text-white rounded-lg cursor-pointer hover:bg-[#ff0000] transition-colors inline-flex"
                >
                  <FaImage /> {uploadingImage ? 'Uploading...' : 'Upload Image'}
                </label>
                {currentBlog.image && (
                  <div className="mt-2">
                    <img src={currentBlog.image} alt="Preview" className="max-w-xs rounded-lg border-2 border-[#800000]" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Content</label>
                <textarea
                  value={currentBlog.content}
                  onChange={(e) => setCurrentBlog({ ...currentBlog, content: e.target.value })}
                  className="w-full px-4 py-3 bg-black border-2 border-[#800000] rounded-lg text-white focus:border-[#ff0000] focus:outline-none font-mono"
                  rows="15"
                  placeholder="Write your blog content here. Separate paragraphs with blank lines."
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSaveBlog}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, #ff0000, #8b0000)",
                    boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)",
                  }}
                >
                  <FaSave /> Save Blog
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FaTimes /> Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#1a0000] border-2 border-[#800000] rounded-xl p-6 hover:border-[#ff0000] transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{blog.date} • {blog.readTime}</p>
                <p className="text-gray-300 mb-4 line-clamp-2">{blog.excerpt}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditBlog(blog)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#800000] text-white rounded-lg hover:bg-[#ff0000] transition-colors"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(blog.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <FaTrash /> Delete
                  </button>
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
