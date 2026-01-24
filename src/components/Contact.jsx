import React, { useRef, useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (sending) return; // prevent multiple submissions
    setSending(true);
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_01dmedd",     // Your EmailJS service ID
        "template_nsaham6",    // Your EmailJS template ID
        formRef.current,
        "I8PD2i7gDjvZS958r"    // Your EmailJS public key
      )
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current.reset();
        setSending(false);
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        setStatus("Failed to send message. Please try again.");
        setSending(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-box">
        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="title" value="Portfolio Contact Form" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
          {status && <p className="status-message">{status}</p>}
        </form>


        <div className="contact-icons">
          <a href="mailto:sakulajayarathne@gmail.com">
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/sakulavishmini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="http://www.linkedin.com/in/sakula-vishmini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
