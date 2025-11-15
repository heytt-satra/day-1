// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import numpylogo from './assets/tech_logo/Numpy.png';
import pandaslogo from './assets/tech_logo/pandas.png';
import matplotliblogo from './assets/tech_logo/Matplotlib.png';
import tensorflowlogo from './assets/tech_logo/TensorFlow.png';
import sklearnlogo from './assets/tech_logo/ScikitLearn.png';
import streamlitlogo from './assets/tech_logo/Streamlit.png';
import gazebologo from './assets/tech_logo/Gazebo.png';
import roswlogo from './assets/tech_logo/ROS2.png';
import qiskitlogo from './assets/tech_logo/Qiskit.png';
import ubuntulogo from './assets/tech_logo/Ubuntu.png';
// Note: 'pytorchlogo' is missing, assuming it's a typo or not provided; commented out for now
import pytorchlogo from './assets/tech_logo/pytorch.png'; // Uncomment and add if available

// Experience Section Logo's
import Starlogo from './assets/company_logo/SPACE.png'; // --- IGNORE ---
import scarbluulogo from './assets/company_logo/scarbluu.png'; // --- IGNORE ---

// Education Section Logo's
import nmimslogo from './assets/education_logo/nmims logo.png';


// Project Section Logo's
import ATBOT from './assets/work_logo/ATBOT.png';
import marsrover from './assets/work_logo/MARSROVER.jpg';
import rocketsim from './assets/work_logo/Rocketsim.png';
import qrng from './assets/work_logo/QRNG PASS GEN.png';
import Stackit from './assets/work_logo/Stackit.png';
import ocr from './assets/work_logo/OCR.png';


export const SkillsInfo = [
  {
    title: 'Full-Stack',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'StreamLit', logo: streamlitlogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'AI/ML',
    skills: [
      { name: 'Numpy', logo: numpylogo },
      { name: 'Pandas', logo: pandaslogo },
      { name: 'Matplotlib', logo: matplotliblogo },
      { name: 'TensorFlow', logo: tensorflowlogo },
      { name: 'Scikit-Learn', logo: sklearnlogo },
      { name: 'pytorch', logo: pytorchlogo }, // Uncomment if pytorchlogo is added
      { name: 'ROS2', logo: roswlogo },
      { name: 'Gazebo', logo: gazebologo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'SQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Ubuntu', logo: ubuntulogo },
      { name: 'Qiskit', logo: qiskitlogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Starlogo,
    role: "Astrodyanmics Intern",
    company: "STAR",
    date: "June 2025 - July 2025",
    desc: "Led three mission-focused projects on orbital mechanics and propulsion, delivering sessions on rocket equations, Hohmann transfers, and GMAT usage; developed Excel simulations for propulsion and transfer calculations alongside GMAT orbital executions; directed tasks and workflows for on-time completion under tight deadlines",
    skills: [
      "GMAT",
      "ROS2",
      "Gazebo",
      "Pytorch",
    ],
  },
  {
    id: 1,
    img: scarbluulogo,
    role: "Web Developer Intern",
    company: "Scarbluu",
    date: "May 2024 - August 2024",
    desc: "Designed, created, and maintained 3 websites, ensuring a cohesive and user-friendly online experience for clients, improving engagement rates by 15%. Conducted thorough testing of new and existing websites, identifying and correcting errors to enhance performance, reducing page load time by 25%",
    skills: [
      "ReactJS",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: nmimslogo,
    school: "SVKM's NMIMS Mukesh Patel School of Technology Management & Engineering, Mumbai",
    date: "August 2022 - May 2026",
    grade: "3.24/4 GPA",
    desc: "Pursuing a Bachelor of Technology in Computer Science and Business Systems, with core courses in Java Programming, Data Structures & Algorithms, AI & ML, Business Strategy, DBMS, Operating Systems, and Computer Networks. Actively engaged in hackathons and international competitions, including the International Rover Challenge and the International Space Drone Challenge. These experiences have strengthened my technical foundation, teamwork, and problem-solving skills, while fueling my passion for building impactful tech solutions.",
    degree: "Bachelor of Technology in Computer Science and Business Systems",
  },

];

export const projects = [
  {
    id: 0,
    title: "Autonomous Drive Robot Simulation",
    description:
      "Built a differential drive robot simulation in ROS2/Gazebo with LIDAR, RGB, and depth sensors using URDF. Implemented teleoperation and sensor visualization for testing autonomous navigation.",
    image: ATBOT,
    tags: ["ROS2", "Gazebo", "RVIZ"],
    github: "https://github.com/heytt-satra/my_bot",
    
  },
  {
    id: 1,
    title: "Sign Detection System for Mars rover",
    description:
      "Designed an AI-powered sign detection system using YOLO and ZED2 stereo vision, enabling autonomous rover navigation with real-time object recognition. Integrated TensorFlow-based directional prediction and depth estimation using the ZED2 camera to determine object distance and movement direction",
    image: marsrover,
    tags: ["Tensorflow", "YOLO", "ZED2", "Machine Learning"],
    github: "https://github.com/heytt-satra/Sign-Detection-System-for-Mars-Rover-using-YOLO-and-ZED2-Camera",
    
  },
  {
    id: 2,    title: "Stackit Social media app",
    description:
      "Web based QNA fourm application where users can post questions, answer others' queries, and engage in discussions. Built with React for the frontend, Node.js and Express for the backend, and PostgreSQL for data storage. Features include user authentication, real-time updates, and a responsive design.",
    image: Stackit,
    tags: ["React JS", "Typescript", "HTML", "Tailwind CSS", "Node JS", "Express JS", "PostgreSQL"],
    github: "https://github.com/heytt-satra/stackit",
    
  },
  {
    id: 3,
    title: "Rocket Engine Simulation ",
    description:
      "Built a 3D rocket engine simulation in Python with Matplotlib, adding realistic physics and telemetry to track altitude, velocity, and throttle. Optimized throttle sequences with debug tools for smooth ascent and descent, hitting altitudes over thousands of meters while boosting visualization and troubleshooting.",
    image: rocketsim,
    tags: ["Python", "Matplotlib", "Numpy"],
    github: "https://github.com/heytt-satra/RocketEngineSimulation",
  },
  {
    id: 4,
    title: "Quantum based Password Generator",
    description:
      "Built a Flask web app utilizing Qiskit and IBM Quantum services to generate secure passwords with true quantum randomness. Implemented customizable password criteria, including length, uppercase, numbers, and symbols.",
    image: qrng,
    tags: ["qiskit", "flask", "HTML", "CSS"],
    github: "https://github.com/heytt-satra/Quantum-Powered-Password-generator",
    
  },
  {
    id: 5,
    title: "OCR model for Hindi and English text extraction",
    description:
      "Developed an Optical Character Recognition (OCR) system for English and Hindi text recognition. Utilized a pre-trained Microsoft model for English OCR and trained a custom Hindi model for 56,000 iterations. Built and deployed the OCR system using Streamlit, making the application accessible for offline use with locally stored data.",
    image: ocr,
    tags: ["Streamlit", "OpenCV", "pytorch", "transformers"],
    github: "https://github.com/heytt-satra/OCR-project-",
     
    
  },
];

export const blogs = [
  {
    id: 0,
    title: "My Journey into Quantum Computing",
    date: "November 15, 2025",
    readTime: "5 min read",
    excerpt: "Exploring the fascinating world of quantum computing and how it's shaping the future of technology. From Qiskit to building quantum-powered applications.",
    tags: ["Quantum Computing", "Qiskit", "Technology"],
    image: qrng,
    content: `Quantum computing has always fascinated me. It's not just about faster computers; it's about solving problems that are fundamentally impossible for classical computers to tackle.

My journey started when I first encountered Qiskit, IBM's open-source quantum computing framework. The idea that you could manipulate qubits and leverage quantum phenomena like superposition and entanglement to perform computations was mind-blowing.

I built my first quantum application - a password generator that uses true quantum randomness. Unlike pseudo-random number generators, quantum systems provide genuine randomness, making them perfect for security applications.

The learning curve was steep. Understanding quantum gates, circuits, and the mathematics behind quantum algorithms required dedication. But every breakthrough, from creating my first Bell state to implementing Grover's algorithm, was incredibly rewarding.

Looking ahead, I'm excited about the potential of quantum computing in cryptography, drug discovery, and optimization problems. The field is still in its infancy, and there's so much to explore and contribute to this revolutionary technology.`
  },
  {
    id: 1,
    title: "Building Autonomous Robots with ROS2",
    date: "November 10, 2025",
    readTime: "7 min read",
    excerpt: "A deep dive into robotics development using ROS2 and Gazebo simulation. Learn about sensor integration, autonomous navigation, and real-world applications.",
    tags: ["Robotics", "ROS2", "AI/ML", "Gazebo"],
    image: ATBOT,
    content: `Robotics has been one of my greatest passions, combining hardware, software, and AI to create intelligent systems that can interact with the physical world.

Working with ROS2 (Robot Operating System 2) opened up a world of possibilities. Unlike its predecessor, ROS2 offers real-time capabilities, improved security, and better support for multi-robot systems - crucial for modern robotics applications.

One of my most exciting projects was building an autonomous differential drive robot in Gazebo simulation. I integrated LIDAR, RGB cameras, and depth sensors using URDF (Unified Robot Description Format). The challenge wasn't just about making the robot move; it was about making it understand its environment.

The International Rover Challenge was a turning point. We developed a sign detection system using YOLO and ZED2 stereo vision for a Mars rover. The robot needed to recognize signs in real-time, determine their distance using depth estimation, and make autonomous navigation decisions. Integrating TensorFlow for directional prediction with the physical constraints of the rover was challenging but incredibly educational.

The beauty of ROS2 lies in its modularity. Each component - sensors, controllers, planners - works as an independent node, communicating through topics and services. This architecture makes debugging easier and allows for rapid prototyping.

For anyone interested in robotics, I highly recommend starting with simulation environments like Gazebo before moving to physical robots. It saves time, money, and provides a safe space to experiment with different algorithms and configurations.`
  },
  {
    id: 2,
    title: "The Future of Full-Stack Development",
    date: "November 5, 2025",
    readTime: "6 min read",
    excerpt: "Exploring modern full-stack development with React, Node.js, and PostgreSQL. Best practices, performance optimization, and building scalable applications.",
    tags: ["Web Development", "React", "Node.js", "PostgreSQL"],
    image: Stackit,
    content: `Full-stack development has evolved dramatically over the past few years. The modern stack I've been working with - React for frontend, Node.js with Express for backend, and PostgreSQL for database - represents a powerful combination for building scalable web applications.

Let me share what I've learned building Stackit, a QNA forum application. The project taught me valuable lessons about architecture, performance, and user experience.

On the frontend, React's component-based architecture is fantastic for building reusable UI elements. However, the real power comes from proper state management and optimization. I learned to leverage React hooks effectively, implement lazy loading, and optimize re-renders to ensure smooth performance.

The backend required careful planning. Express.js provides flexibility, but with that comes responsibility. I implemented proper error handling, validation middleware, and structured the API following RESTful principles. Authentication and authorization were critical - using JWT tokens with proper expiration and refresh mechanisms.

PostgreSQL proved to be an excellent choice for data storage. Its ACID compliance ensures data integrity, and its advanced features like full-text search and JSON support made implementing complex queries straightforward. Proper indexing and query optimization were crucial for performance as the dataset grew.

One of the biggest lessons: always think about scalability from the start. Design your database schema carefully, use proper caching strategies, and write clean, maintainable code. Future you will thank present you.

The journey of a full-stack developer is one of continuous learning. New frameworks and tools emerge constantly, but the fundamentals - understanding how data flows, writing efficient code, and prioritizing user experience - remain timeless.`
  },
  {
    id: 3,
    title: "Machine Learning in Practice: Lessons from OCR Development",
    date: "October 28, 2025",
    readTime: "8 min read",
    excerpt: "Real-world insights from building an OCR system for Hindi and English text. Training custom models, optimization techniques, and deployment strategies.",
    tags: ["Machine Learning", "Deep Learning", "OCR", "PyTorch"],
    image: ocr,
    content: `Developing an Optical Character Recognition system for both Hindi and English text was one of my most challenging and rewarding projects. It taught me that machine learning in practice is very different from machine learning in tutorials.

The project started with a clear goal: create an OCR system that could accurately extract text from images in both English and Hindi. For English, I used a pre-trained Microsoft model, which worked well out of the box. But Hindi presented unique challenges.

Training a custom Hindi OCR model required 56,000 iterations and massive amounts of labeled data. Data preprocessing became crucial - normalizing images, handling different fonts, managing varying image qualities, and dealing with skewed or rotated text. I learned that in ML, data quality trumps model complexity.

Model architecture decisions were critical. I experimented with different CNN architectures before settling on one that balanced accuracy and inference speed. Using PyTorch gave me the flexibility to customize the training loop and implement custom loss functions suited for character recognition.

One major challenge was handling the nuances of Hindi script - conjunct consonants, matras, and the various forms characters can take. The model needed to understand not just individual characters but their contextual variations.

Deployment was another learning experience. I built the application using Streamlit, making it accessible and user-friendly. But more importantly, I optimized it for offline use with locally stored models. This meant careful attention to model size, inference speed, and memory usage.

Key takeaways: Start with data exploration, invest time in preprocessing, iterate quickly with small experiments, and always validate with real-world test cases. The gap between a model that works in development and one that performs reliably in production is significant.

Machine learning is not magic - it's systematic experimentation, careful engineering, and continuous refinement. And that's what makes it so fascinating.`
  }
];
