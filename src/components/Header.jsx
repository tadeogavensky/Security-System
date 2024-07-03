"use client";
import React, { useState } from "react";
import styles from "@/components/header.module.css";
import user from "../../public/user.jpg";
import Image from "next/image";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { RiUser5Fill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { FaRunning,FaLightbulb } from "react-icons/fa";

const Header = () => {
  const [menu, openMenu] = useState(false);
  const [selected, setSelected] = useState("");

  const variants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "100%", opacity: 0 },
  };
  return (
    <header className={styles.header}>
      <div className={styles.overview}>
        <Image src={user} />
        <div>
          <h3>Sofía Gomez</h3>
          <p>Frontend Developer</p>
        </div>
      </div>

      <ul className={styles.links}>
        <li>Sobre mí</li>
        <li>Intereses</li>
        <li>Contactarme</li>
      </ul>

      <button
        className={`${styles.noStyleBtn} ${styles.menuBtn}`}
        onClick={() => {
          openMenu(!menu);
        }}
      >
        <IoMenuSharp size={30} color="black" />
      </button>

      <motion.div
        className={styles.mobileMenu}
        initial="closed"
        animate={menu ? "open" : "closed"}
        variants={variants}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <button
          className={`${styles.noStyleBtn} ${styles.menuBtn}`}
          onClick={() => {
            openMenu(!menu);
          }}
        >
          <IoCloseSharp size={30} color="black" />
        </button>
        <ul>
          <div
            onClick={() => {
              setSelected("about");
            }}
          >
            <li>Sobre mí</li>
            {selected == "about" ? (
              <RiUser5Fill size={30} color="white" />
            ) : (
              <RiUser5Fill size={30} color="black" />
            )}
          </div>
          <div
            onClick={() => {
              setSelected("interests");
            }}
          >
            <li>Intereses</li>
            {selected == "interests" ? (
              <FaLightbulb size={30} color="white" />
            ) : (
              <FaLightbulb size={30} color="black" />
            )}
          </div>
          <div
            onClick={() => {
              setSelected("contact");
            }}
          >
            <li>Contactarme</li>
            {selected == "contact" ? (
              <MdAlternateEmail size={30} color="white" />
            ) : (
              <MdAlternateEmail size={30} color="black" />
            )}
          </div>
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
