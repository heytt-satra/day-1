import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Testimonials from "./components/Testimonials/Testimonials";
import Education from "./components/Education/Education";
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/Blog/BlogPost";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background";
import Cursor from "./components/Cursor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <About />
        <Services />
        <Skills />
        <Experience />
        <Work />
        <Testimonials />
        <Education />
        <Blog />
        <Footer />
      </main>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen text-platinum selection:bg-crimson selection:text-white">
        <Cursor />
        <Background />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        
        <Analytics />
        <SpeedInsights/>
      </div>
    </Router>
  );
};

export default App;