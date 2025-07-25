import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';


function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Contact Me</h2>

        {/* Social Icons */}
        <div className="mt-4 d-flex gap-3">
          <a
            href="https://www.linkedin.com/in/vundekoti-vidyasagar/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-primary"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/VIDYASAGARVV"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-dark"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:sagarvv105@gmail.com"
            className="social-icon text-danger"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/+918341914191"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-success"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}




export default Contact;
