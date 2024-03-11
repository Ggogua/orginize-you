import React from "react";
import styles from "../styles/Body.module.css";

const Body = () => {
  return (
    <section className={styles.bodyContainer}>
      <div className={styles.bodyWrapper}>
        <p>Easy to Use</p>
        Simplified chore lists with intuitive layout for seamless daily planning
      </div>

      <div className={styles.firstDiv}>
        <p>Full Support</p>
        Empower your productivity with personalized task management guided by
        your rules
      </div>

      <div className={styles.firstDiv}>
        <p>Never feel lost</p>
        Stay seamlessly connected to your tasks anytime, anywhere with our sync
        mobile app
      </div>
    </section>
  );
};

export default Body;
