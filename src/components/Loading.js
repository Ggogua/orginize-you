// Loading.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Loading.module.css";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the /tasks route after 3 seconds
      navigate("/tasks");
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className={styles.LoadingContainer}>
      <div className={styles.LoadingWrapper}>
        <img src="./assets/loading.png" alt="Loading" />
        <div className={styles.TextWrapper}>
          <p className={styles.HangOn}>Hang on</p>
          <p>for a moment...</p>
        </div>
      </div>
    </section>
  );
};

export default Loading;
