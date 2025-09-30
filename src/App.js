import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <>
      <Navbar />

      {/* Main scrolling single-page sections */}
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        {/* Define route for detailed project view */}
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetail />} />
          {/* You can add other pages here later if needed */}
        </Routes>
        <Contact />
      </main>
    </>
  );
}

export default App;
