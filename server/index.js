
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'blogs.json');

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

// Initial SEO Optimized Dummy Data
const initialBlogs = [
    {
        id: 1715629123456,
        title: "The Future of AI in Web Development: Beyond Chatbots",
        date: "May 12, 2025",
        readTime: "8 min read",
        excerpt: "Artificial Intelligence is transforming how we build the web. From predictive UX to autonomous code generation, discover the trends shaping 2025.",
        tags: ["AI", "Web Development", "Future Tech", "LLM"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        content: "# The Future of AI in Web Development\n\nThe landscape of web development is undergoing a seismic shift. We are moving beyond simple chatbots and into an era of **autonomous agents** and **predictive user interfaces**.\n\n## Predictive UX\n\nImagine a website that adapts its layout in real-time based on user behavior. Using reinforcement learning models, we can now create interfaces that anticipate user needs before they even click."
    },
    {
        id: 1715715523456,
        title: "Mastering Full Stack Scalability: A Guide for 2025",
        date: "June 01, 2025",
        readTime: "12 min read",
        excerpt: "Learn the architectural patterns that allow modern applications to handle millions of requests. Microservices, Serverless, and Edge Computing explained.",
        tags: ["System Architecture", "Scalability", "Backend", "Performance"],
        image: "https://images.unsplash.com/photo-1558494949-efc535b5c479?auto=format&fit=crop&q=80&w=800",
        content: "# Mastering Scalability\n\nScalability isn't just about adding more servers; it's about **architectural elegance**. In this guide, we explore how to leverage edge computing to reduce latency by 40%.\n\n### Key Principles\n1. **Stateless Design**: Ensure your backend services can scale horizontally without friction.\n2. **Database Sharding**: Distribute your data to prevent bottlenecks."
    },
    {
        id: 1715801923456,
        title: "Building a Personal Brand in the Age of AI",
        date: "June 15, 2025",
        readTime: "6 min read",
        excerpt: "In a world of automated content, authentic personal branding is your most valuable asset. Strategies for standing out as a developer.",
        tags: ["Branding", "Career", "Soft Skills"],
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
        content: "# Personal Branding for Developers\n\nTechnical skills are the baseline. Your **story** is the differentiator. \n\n> \"Your brand is what people say about you when you're not in the room.\" - Jeff Bezos\n\nBuilding a digital garden, contributing to open source, and sharing your learning journey are the pillars of a strong developer brand in 2025."
    },
    {
        id: 1715888323456,
        title: "Optimization Techniques for Next.js Applications",
        date: "July 03, 2025",
        readTime: "10 min read",
        excerpt: "Deep dive into advanced optimization strategies: Server Components, Streaming, and Image Optimization for perfect Lighthouse scores.",
        tags: ["Next.js", "React", "Performance", "SEO"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        content: "# Optimizing Next.js\n\nPerformance is user experience. With Google's Core Web Vitals becoming a ranking factor, optimization is non-negotiable.\n\n## Server Components\n\nBy moving heavy JavaScript to the server, we reduce the client capability requirement and improve TTI (Time to Interactive) dramatically."
    }
];

// Initialize blogs.json if not exists or empty
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialBlogs, null, 2));
}

app.get('/api/blogs', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Error reading data' });
        try {
            const blogs = JSON.parse(data);
            res.json(blogs);
        } catch (e) {
            // If file is empty or corrupted, return initial
            res.json(initialBlogs);
        }
    });
});

app.post('/api/blogs', (req, res) => {
    const newBlog = req.body;
    const blogData = newBlog.blog || newBlog;

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        const blogs = err || !data ? [] : JSON.parse(data);
        blogData.id = Date.now();
        blogs.unshift(blogData);

        fs.writeFile(DATA_FILE, JSON.stringify(blogs, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Error saving data' });
            res.json({ success: true, blog: blogData });
        });
    });
});

app.delete('/api/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id);
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err || !data) return res.status(500).json({ error: 'Error reading data' });

        let blogs = JSON.parse(data);
        const initialLength = blogs.length;
        blogs = blogs.filter(blog => blog.id !== blogId);

        if (blogs.length === initialLength) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        fs.writeFile(DATA_FILE, JSON.stringify(blogs, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Error saving data' });
            res.json({ success: true });
        });
    });
});

app.post('/api/auth/login', (req, res) => {
    const { password } = req.body;
    if (password === 'admin123') {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
});

app.post('/api/upload', (req, res) => {
    res.json({ success: true, url: "https://via.placeholder.com/800x400" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
