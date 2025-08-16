import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Home from "../Component/Home";
import About from "../Component/About";
import Service from "../Component/Service";
import Projects from "../Component/Projects";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import InternshipExperience from "../Component/InternshipExperience";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Only animate once
    });
  }, []);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Navbar
        toggleDarkMode={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
      />
      <Home />
      <About />
      <Service />
      <Projects />
      <InternshipExperience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
