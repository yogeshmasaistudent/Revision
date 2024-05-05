import React from 'react'
import { useState } from 'react';
function Form2() {
    const [formData,SetFormData] = useState({
        name:"",
        email:"",
        password:"",
    })

    const [formError,SetFormError] = useState({
        name:"",
        email:"",
        password:"",
    })

    const handleChange = (e)=>{
      const {name,value}= e.target;
      SetFormData({...formData,[name]:value});
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const error = {};
        if(formData.name.trim()!==""){
            error.name = "Name is Required"
        }
        if(!formData.email.trim()){
            error.email = "Email is Required"
        }
        if(!formData.password.trim()){
            error.password = "Password is Required"
        }
        if(Object.keys(error).length==0){
            console.log("Form Submited",formData)
        }else{
            SetFormError(error)
        }
    }

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formError.name && <span className="error">{formError.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="eamil">Email</label>
          <input
            type="eamil"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formError.email && <span className="error">{formError.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
             value={formData.password}
            onChange={handleChange}
          />
          {formError.password && <span className="error">{formError.password}</span>}
        </div>
        <div className="form-group">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Form2