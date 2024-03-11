import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Headnext.module.css";

const Headnext = () => {
  return (
    <section className={styles.HeadnextContainer}>
      <div className={styles.leftDiv}>
        <div>
          <p>Do Your Tasks</p>
          <p>Quickly and Easy</p>
        </div>
        <span>Your Tasks, Your Rule, Our Support</span>

        <Link to="/login">
          <button>Get Started</button>
        </Link>
      </div>
      <div className={styles.rightDiv}>
        <img
          src="./assets/imageGirl.jpg"
          alt="Girl"
          className={styles.GirlImage}
        />
      </div>
    </section>
  );
};

export default Headnext;
