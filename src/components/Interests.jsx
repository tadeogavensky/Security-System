"use client";

import React from "react";
import styles from "@/components/interests.module.css";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlinePiano } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { PiChefHat } from "react-icons/pi";
import Interest from "./Interest";
import { motion } from "framer-motion";

const Interests = () => {
  const interests = [
    {
      title: "Leer",
      icon: <IoBookOutline size={30} />,
      description:
        "Disfruto perderme en mundos diferentes y aprender de diversas culturas y perspectivas a través de la lectura.",
    },
    {
      title: "Música",
      icon: <MdOutlinePiano size={30} />,
      description:
        "Me apasiona escuchar y tocar música, especialmente el piano. La música es una forma de expresión artística que me inspira.",
    },
    {
      title: "Programar",
      icon: <FaCode size={30} />,
      description:
        "Me encanta crear soluciones y construir aplicaciones web. La programación es tanto un desafío intelectual como una forma de creatividad.",
    },
    {
      title: "Cocinar",
      icon: <PiChefHat size={30} />,
      description:
        "Cocinar es una de mis pasiones. Me gusta experimentar con nuevas recetas y sabores, y compartir comidas con amigos y familia.",
    },
  ];

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={styles.interests}>
      <h1>Mis Intereses</h1>
      <div className={styles.boxContainer}>
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={variants}
          >
            <Interest key={index} interest={interest} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
