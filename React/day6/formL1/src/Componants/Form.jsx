import React, { useState } from "react";
import styles from "./Form.module.css";
import Table from "./Table";

function Form() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const user = {
    name:"",
    email:"",
    password:"",
    gender:"",
  }

  // Capture data from input 
 const [formData,setFormData]= useState(user);
 const [UserData,SetUserData] = useState([]);
//  console.log(formData)
 function handleChange(e){
   const {name,value} = e.target;
   setFormData({...formData,[name]:value})
 }


function Handsubmit(e){
  e.preventDefault();
   SetUserData([...UserData,formData]);
   setFormData(user);
}
console.log(UserData)


  return (
    <div>
      <div className={styles["form-container"]}>
        <h1>ADD User</h1>
        <form onSubmit={Handsubmit}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            onChange={handleChange}
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
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
          <select name="gender" onChange={handleChange}>
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
      <div className={styles.table}>
        <Table UserData={UserData} />
      </div>
    </div>
  );
}

export default Form;
