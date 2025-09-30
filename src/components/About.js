import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        {/* Animated Heading */}
        <motion.h2
          className="mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>

        {/* Animated Content */}
        <motion.div
          className="row justify-content-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="col-md-4 text-center mb-3">
            <img
              src="https://res.cloudinary.com/sghome/image/upload/v1752084416/me2_rh51oe.jpg"
              className="img-fluid rounded"
              style={{width:"200px",height:"200px"}}
              alt="Profile"
            />
          </div>
        </motion.div>

        <motion.div
          className="row justify-content-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="col-md-8">
            <p className="lead text-muted">
              Hi! I'm a passionate web developer with experience in building
              responsive like PHP(JWT authentication File/image upload, Pagination,
              search, filter) Deployment (FTP, cPanel) and
              interactive websites using technologies like React.js (components,
              hooks, routing), Bootstrap, Node.js, and MongoDB.
            </p>
            <p>
              I enjoy solving real-world problems, continuously learning new
              tools and techniques, and turning ideas into reality through clean
              and efficient code. I’m enthusiastic, self-motivated, and always
              ready for new challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
