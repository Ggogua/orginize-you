import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <img src="../assets/mental.png" alt="Mental" />
      <div>
        Maximize productivity and prioritize mental wellness with our website
        version. Seamlessly blending mindfulness and task management, our
        platform offers a comprehensive solution for your daily challenges.
      </div>
    </div>
  );
};

export default Footer;
