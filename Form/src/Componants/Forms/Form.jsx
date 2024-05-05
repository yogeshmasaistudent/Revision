import React, { useState } from 'react'
import "../Forms/Form.css"
function Form() {

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
    const {name,value} = e.target;
    SetFormData({...formData,[name]:value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const error = {};
        if(!formData.name.trim()){
            error.name = "Name is Required"
        }
        if(!formData.email.trim()){
            error.email = "Email is Requred"
        }

        if(!formData.password.trim()){
            error.password = "Password is Required"
        }
  
         if(Object.keys(error).length===0){
            console.log("Form Submited", formData);
         }else{
            SetFormError(error)
 }
}

  return (
    <div>
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='form-group'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleChange} />
          {formError.name&&<span className='error'>{formError.name}</span>}
        </div>

        <div className='form-group'>
            <label htmlFor='email'>Emai</label>
            <input type='email' name='email' onChange={handleChange}/>
            {formError.email&&<span className='error'>{formError.email}</span>}
        </div>

        <div className='form-group'>
            <label htmlFor=''>password</label>
            <input type='password' name='password' onChange={handleChange}/>
            {formError.password&&<span className='error'>{formError.password}</span>}
        </div>
        <div className='form-group'>
            <input type='submit'/>
        </div>
      </form>
    </div>
  );
}

export default Form