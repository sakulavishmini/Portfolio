import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Sakula Jayarathne. All rights reserved.</p>

      <div className="footer-icons">
        <a href="mailto:sakulajayarathne@gmail.com"><FaEnvelope /></a>
        <a href="https://github.com/sakulavishmini" target="_blank"><FaGithub /></a>
        <a href="http://www.linkedin.com/in/sakula-vishmini" target="_blank"><FaLinkedin /></a>
      </div>
    </footer>
  );
};

export default Footer;
