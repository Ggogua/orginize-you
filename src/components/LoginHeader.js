import React from "react";
import styles from "../styles/Head.module.css";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <section className={styles.headContainer}>
      <div className={styles.headWrapper}>
        <Link to="/">
          <div className={styles.logo}>
            <img src="./assets/logo.svg" alt="logo" />
            <p>Schedule</p>
          </div>
        </Link>
        <div className={styles.navList}>
          <ul>
            <li>About Us</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LoginHeader;
