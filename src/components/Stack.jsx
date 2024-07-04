"use client";
import React from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BsDatabaseFill } from "react-icons/bs";
import { SiAdobephotoshop } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import styles from "@/components/stack.module.css";
import { motion } from "framer-motion";

const Stack = () => {
  const stack = [
    { name: "React", icon: <FaReact size={30} /> },
    { name: "Next.js", icon: <RiNextjsFill size={30} /> },
    { name: "Database", icon: <BsDatabaseFill size={30} /> },
    { name: "HTML5", icon: <FaHtml5 size={30} /> },
    { name: "CSS3", icon: <FaCss3Alt size={30} /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill size={30} /> },
    { name: "Photoshop", icon: <SiAdobephotoshop size={30} /> },
    { name: "Figma", icon: <IoLogoFigma size={30} /> },
  ];

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {stack.map((tech, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={variants}
            className={styles.card}
          >
            {tech.icon}
            <p>{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
