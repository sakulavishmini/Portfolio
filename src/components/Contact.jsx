import React, { useRef } from "react";
import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal.jsx";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { ref, visible } = useScrollReveal();
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_s5uomzl",
      "template_anr7qmu",
      formRef.current,
      "I8PD2i7gDjvZS958r"
    )
    .then(() => {
      alert("Message sent successfully!");
      formRef.current.reset();
    })
    .catch((error) => {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please check the console for details.");
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact ${visible ? "show" : ""}`}
    >
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-box">
        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-icons">
          <a href="mailto:sakulajayarathne@gmail.com"><FaEnvelope /></a>
          <a href="https://github.com/sakulavishmini" target="_blank"><FaGithub /></a>
          <a href="http://www.linkedin.com/in/sakula-vishmini" target="_blank"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
