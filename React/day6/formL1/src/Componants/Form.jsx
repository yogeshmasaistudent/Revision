import React, { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={styles["form-container"]}>
      <h1>ADD User</h1>
      <form>
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="email" />
        <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
        />
        <div className={styles["checkbox-container"]}>
          <input
            type="checkbox"
            id="showPassword"
            className={styles["checkbox-input"]}
            checked={showPassword}
            onChange={handleTogglePassword}
          />
          <label
            htmlFor="showPassword"
            className={`${styles["checkbox-custom"]} ${
              showPassword ? styles.checked : ""
            }`}
          />
          <label htmlFor="showPassword" className={styles["checkbox-label"]}>
            Show Password
          </label>
        </div>
        <select>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="submit"
          value="Submit"
          className={styles["submit-button"]}
        />
      </form>
    </div>
  );
}

export default Form;
