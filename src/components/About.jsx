"use client";

import React from "react";
import styles from "@/components/about.module.css";

import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.about}
    >
      <div className={styles.title}>
        <p>Tu proxima desarrolladora web 👩‍💻</p>
        <h1>
          Soy
          <p style={{ color: "#595cff" }}>Sarah Vieira</p>
          <p>Diseñadora UX/UI y Desarrolladora Frontend</p>
        </h1>
        <div className={styles.aboutContact}>
          <button className={styles.btnContact}>
            <MdOutlineEmail size={24} />
            <p> Hablá conmigo!</p>
          </button>
          <a href="#">Mis proyectos</a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
