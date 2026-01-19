import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
