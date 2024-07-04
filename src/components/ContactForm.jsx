"use client";
import styles from "@/components/form.module.css";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    text: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    text: false,
  });

  const validateFirstName = (firstName) => firstName.length > 0;

  const validateLastName = (lastName) => lastName.length > 0;

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFirstNameValid = validateFirstName(data.firstName);
    const isLastNameValid = validateLastName(data.lastName);
    const isEmailValid = validateEmail(data.email);
    const isTextValid = data.text.length > 0;

    setErrors({
      firstName: !isFirstNameValid,
      lastName: !isLastNameValid,
      email: !isEmailValid,
      text: !isTextValid,
    });

    if (isFirstNameValid && isLastNameValid && isEmailValid && isTextValid) {
      toast.success("Mensaje enviado!");
    } else {
      toast.error("Asegúrate de que los datos sean válidos!");
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>Conectá conmigo</p>
        <h1>Contactame.</h1>
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          className={errors.firstName ? styles.invalid : styles.valid}
          placeholder="Nombre"
        />

        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          className={errors.lastName ? styles.invalid : styles.valid}
          placeholder="Apellido"
        />

        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
          className={errors.email ? styles.invalid : styles.valid}
          placeholder="E-mail"
        />

        <input
          type="text"
          name="text"
          value={data.text}
          onChange={handleChange}
          style={{ border: "transparent" }}
          placeholder="Hola Sarah! Quiero trabajar con vos..."
        />

        <button type="submit">Envíar</button>
      </form>
    </>
  );
};

export default ContactForm;
