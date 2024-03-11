import React from "react";
import styles from "../styles/Head.module.css";

const Head = () => {
  return (
    <section className={styles.headContainer}>
      <div className={styles.headWrapper}>
        <div className={styles.logo}>
          <img src="./assets/logo.svg" alt="logo" />
          <p>Schedule</p>
        </div>
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

export default Head;
