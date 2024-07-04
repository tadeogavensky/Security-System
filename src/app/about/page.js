import React from "react";
import AboutComponent from "@/components/About";
import styles from "@/components/about.module.css";
import Stack from "@/components/Stack";
import user2 from "../../../public/user2.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div>
      <AboutComponent />
      <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <h1
          style={{
            fontFamily: "Palanquin",
            fontWeight: "900",
            fontSize: "3em",
            textAlign: "center",
          }}
        >
          Sobre Mí
        </h1>

        <p
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "400",
            fontSize: "1.5rem",
            color: "#333",
            lineHeight: "1.8",
            marginBottom: "1.5rem",
            backgroundColor: "#fff",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          ¡Hola! Soy Sarah, una desarrolladora web apasionado por crear
          soluciones innovadoras y eficientes. Tengo experiencia en una variedad
          de tecnologías de desarrollo web, incluyendo HTML, CSS, JavaScript, y
          frameworks modernos como React y Next.js. Me encanta aprender y
          explorar nuevas herramientas y metodologías que pueden mejorar la
          calidad y la eficiencia de mis proyectos.
        </p>
        <h1
          style={{
            fontFamily: "Palanquin",
            fontWeight: "900",
            fontSize: "3em",
            textAlign: "center",
          }}
        >
          Mi Stack
        </h1>
        <Stack />
      </div>
    </div>
  );
};

export default About;
