import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
