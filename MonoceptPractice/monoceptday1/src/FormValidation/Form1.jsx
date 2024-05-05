import React, { useState } from 'react'
import "../FormValidation/Form.css"
function Form1() {

  const [formData,SetFormData] = useState({
     name:"",
     email:"",
     password:"",
  })
  const [FormError,SetFormError] = useState({
    name:"",
    email:"",
    password:"",
  })

  const handleChange = (e)=>{
    const {name,value} = e.target
    SetFormData({...formData,[name]:value})
    SetFormError({...FormError,[name]:""})
  }


 const handleSubmit = (e)=>{
   e.preventDefault();

   let error = {};

  //  Simple logic for validation 
  if(!formData.name.trim()){
    error.name = "Name is Required"
  }
  if(!formData.email.trim()){
    error.email = "Email is Required"
  }
  if(!formData.password.trim()){
    error.password = "Password is Required"
  }

  if(Object.keys(error).length==0){
    console.log("Form Submited", formData)
  }else{
    SetFormError(error);
  }
 }
  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={formData.name}
          />
          {FormError&&<span className="error">{FormError.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          {FormError.email && <span className="error">{FormError.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {FormError.password && <span className="error">{FormError.password}</span>}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default Form1