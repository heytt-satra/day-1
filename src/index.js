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

// make sure uploads folder exists
const uploadsPath = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

// serve uploads
app.use('/uploads', express.static(uploadsPath));

const BLOGS_FILE = path.join(__dirname, 'blogs.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsPath);
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
  const idParam = req.params.id;

  // match number or string ids
  let blog = blogs.find(b => String(b.id) === idParam);

  // fallback for slug or string type ids (_id)
  if (!blog) {
    blog = blogs.find(b => b._id === idParam || b.slug === idParam);
  }

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
    id: blogs.length > 0 ? Math.max(...blogs.map(b => parseInt(b.id))) + 1 : 0,
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
  const idParam = req.params.id;

  const index = blogs.findIndex(b => String(b.id) === idParam);

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
  const idParam = req.params.id;

  const filteredBlogs = blogs.filter(b => String(b.id) !== idParam);

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

//
// serve frontend build
//
const publicFolder = path.join(__dirname, 'public');
app.use(express.static(publicFolder));

//
// fallback to SPA routing
//
app.get('*', (req, res) => {
  res.sendFile(path.join(publicFolder, 'index.html'));
});

//
// start server on all interfaces (fixes deployment issues)
//
app.listen(PORT, () => {
  console.log(`Blog API server running on http://0.0.0.0:${PORT}`);
});
