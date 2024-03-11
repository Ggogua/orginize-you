import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoginBody.module.css";

const LoginBody = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailHasError = false;
    let passwordHasError = false;

    if (email.trim() === "") {
      setEmailError("Email cannot be empty");
      emailHasError = true;
      setTimeout(() => {
        setEmailError("");
      }, 3000);
    }

    if (password.trim() === "") {
      setPasswordError("Password cannot be empty");
      passwordHasError = true;
      setTimeout(() => {
        setPasswordError("");
      }, 3000);
    }

    if (
      !emailHasError &&
      !passwordHasError &&
      email.trim() !== "" &&
      password.trim() !== ""
    ) {
      navigate("/loading");
    }
  };

  return (
    <section className={styles.LoginContainer}>
      <div className={styles.LoginWrapper}>
        <div className={styles.LoginUpperDiv}>
          <p className={styles.LogInText}>Log In</p>
          <p className={styles.LogInSubtext}>
            Welcome back! Sign in using your social account or email to continue
            us
          </p>
          <div className={styles.icons}>
            <img src="./assets/fb.svg" alt="Facebook" />
            <img src="./assets/google.svg" alt="Google" />
            <img src="./assets/apple.svg" alt="Apple" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className={styles.errorText}>{emailError}</div>
          </div>

          <div className={styles.inputWrapper}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className={styles.errorText}>{passwordError}</div>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

export default LoginBody;
