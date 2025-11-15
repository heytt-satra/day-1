import express from 'express';
import multer from 'multer';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));


const BLOGS_FILE = path.join(__dirname, 'blogs.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

const readBlogs = () => {
  try {
    if (!fs.existsSync(BLOGS_FILE)) {
      fs.writeFileSync(BLOGS_FILE, JSON.stringify([]));
      return [];
    }
    const data = fs.readFileSync(BLOGS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading blogs:', error);
    return [];
  }
};

const writeBlogs = (blogs) => {
  try {
    fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing blogs:', error);
    return false;
  }
};

app.post('/api/auth/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.json({ success: true, token: 'authenticated' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid password' });
  }
});

app.get('/api/blogs', (req, res) => {
  const blogs = readBlogs();
  res.json(blogs);
});

app.get('/api/blogs/:id', (req, res) => {
  const blogs = readBlogs();
  const blog = blogs.find(b => b.id === parseInt(req.params.id));
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
});

app.post('/api/blogs', (req, res) => {
  const { password, blog } = req.body;
  
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const blogs = readBlogs();
  const newBlog = {
    ...blog,
    id: blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 0,
    createdAt: new Date().toISOString()
  };
  
  blogs.push(newBlog);
  
  if (writeBlogs(blogs)) {
    res.json({ success: true, blog: newBlog });
  } else {
    res.status(500).json({ message: 'Error saving blog' });
  }
});

app.put('/api/blogs/:id', (req, res) => {
  const { password, blog } = req.body;
  
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const blogs = readBlogs();
  const index = blogs.findIndex(b => b.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ message: 'Blog not found' });
  }
  
  blogs[index] = { ...blogs[index], ...blog, updatedAt: new Date().toISOString() };
  
  if (writeBlogs(blogs)) {
    res.json({ success: true, blog: blogs[index] });
  } else {
    res.status(500).json({ message: 'Error updating blog' });
  }
});

app.delete('/api/blogs/:id', (req, res) => {
  const { password } = req.body;
  
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const blogs = readBlogs();
  const filteredBlogs = blogs.filter(b => b.id !== parseInt(req.params.id));
  
  if (writeBlogs(filteredBlogs)) {
    res.json({ success: true });
  } else {
    res.status(500).json({ message: 'Error deleting blog' });
  }
});

app.post('/api/upload', upload.single('image'), (req, res) => {
  const { password } = req.body;
  
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  res.json({
    success: true,
    filename: req.file.filename,
    url: `/uploads/${req.file.filename}`
  });
});

app.listen(PORT, 'localhost', () => {
  console.log(`Blog API server running on http://localhost:${PORT}`);
});
