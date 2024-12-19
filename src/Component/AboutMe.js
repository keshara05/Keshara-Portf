import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";
import profileImage from "../img/face.jpg"; // Import the image
import cvFile from "../img/Keshara-Rathnayaka-CV.pdf"; // Import your CV file

function AboutMe() {
  return (
    <div className="about-container" id="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="about-text">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hello! I'm <strong>Keshara Rathnayaka</strong>, a passionate Software Engineer with a strong interest in web development, UX design, and building innovative solutions. I strive to create seamless and beautiful user experiences through clean, efficient code.
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I love to explore new technologies and continuously grow my skillset. When I'm not coding, you can find me exploring new places or working on personal projects to enhance my skills.
          </motion.p>

          <motion.div
            className="cv-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a href={cvFile} download className="cv-button">
              Download My CV
            </a>
          </motion.div>
        </div>

        <motion.div
          className="about-image"
          initial={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={profileImage}
            alt="Keshara Rathnayaka"
            className="profile-img"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
