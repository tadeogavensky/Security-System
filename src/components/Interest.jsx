import React from "react";
import styles from "@/components/interests.module.css";

const Interest = ({ interest }) => {
  return (
    <div className={styles.box}>
      <div>
        <span>{interest.icon}</span>
        <h3>{interest.title}</h3>
      </div>
      <p>{interest.description}</p>
    </div>
  );
};

export default Interest;
