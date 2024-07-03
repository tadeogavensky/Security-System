import React from "react";
import styles from "@/components/about.module.css";
import Image from "next/image";
import user2 from "../../public/user2.jpg";
import { MdOutlineEmail } from "react-icons/md";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <p>Tu proxima desarrolladora web 👩‍💻</p>
        <h1>
          Soy
          <span style={{ color: "blue" }}> Sarah Vieira</span>
          <h3>Diseñadora UX/UI - Desarrolladora Frontend</h3>
        </h1>
        <div className={styles.aboutContact}>
          <button className={styles.btnContact}>
            <MdOutlineEmail size={24} />
            <p> Hablá conmigo!</p>
          </button>
          <a href="">Mis proyectos</a>
        </div>
      </div>

      {/*      <Image src={user2} /> */}
    </div>
  );
};

export default About;
