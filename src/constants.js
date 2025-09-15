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
import ocr from './assets/work_logo/ocr.png';


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
]
