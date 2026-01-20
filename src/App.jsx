import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
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
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
