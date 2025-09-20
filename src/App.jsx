import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#ff0000]">
      <BlurBlob position={{ top: "35%", left: "20%" }} size={{ width: "30%", height: "40%" }} />
      <div className="absolute inset-0 bg-[conic-gradient(#800000_90deg,transparent_90deg_180deg,#800000_180deg_270deg,transparent_270deg)] bg-[size:28px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Footer />
        <Analytics />
        <SpeedInsights/>
      </div>
    </div>
  );
};

export default App;