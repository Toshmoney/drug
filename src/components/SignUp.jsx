import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Footer from './Footer/Footer'

const SignUp = () => {

  const [redirect, setRedirect] = useState(false)

    const [userDetails, setUserDetails] = useState({
        name:'',
        email:'',
        regNumber:'',
        password:'',
        confirmPassword:''
    });

    
  const handleUserDetails = (event)=>{
    const {name, value} = event.target;
    setUserDetails((prevData)=>{
      return{
        ...prevData,
        [name]:value
      }
    })
  };
  
const handleSubmit = async(event)=>{
  event.preventDefault();
  if(!userDetails.name || !userDetails.email || !userDetails.regNumber || !userDetails.password){
    alert("missing fields!!!")
    return <Navigate to={"/sign-up"} />
  }else if(userDetails.password !== userDetails.confirmPassword){
    alert("Password Not Match.. Kindly fill in the same password!")
    return <Navigate to={"/sign-up"} />

  }
  const response = await fetch("http://localhost:7000/sign-up",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body:JSON.stringify(userDetails)
})
if (response.ok){
  alert("You have successfully signed up!")
  setRedirect(true)
}
}

if(redirect){
    return <Navigate to={"/sign-in"} />
  }

  return (
    <section className='sign-up-section'>
            <div className='sign-up-text'>
                <h2>Sign Up As A Company</h2>
            </div>
        <main>
            <form action="" className='sign-up-form' onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' placeholder='email' name='email' value={userDetails.email} onChange={handleUserDetails} />
                </div>
                <div className="form-control">
                    <label htmlFor="name">Company Name</label>
                    <input type="text" id='name' placeholder='Company Name' name='name' value={userDetails.name} onChange={handleUserDetails} />
                </div>
                <div className="form-control">
                    <label htmlFor="reg">Company Reg Numb</label>
                    <input type="text" id='reg' placeholder='NAFDAC Reg Numb' name='regNumber' value={userDetails.regNumber} onChange={handleUserDetails} />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='password' name='password' value={userDetails.password} onChange={handleUserDetails} />
                </div>
                <div className="form-control">
                    <label htmlFor="c-password">Confirm Password</label>
                    <input type="password" id='c-password' placeholder='Confirm Password' name='confirmPassword' value={userDetails.confirmPassword} onChange={handleUserDetails} />
                </div>
                <div>
                    <button className='btn'>Sign Up</button>
                </div>
                <div>
                    <h3>Already have an account? <a href="/sign-in">sign in</a></h3>
                </div>
            </form>
           
        </main>
        <Footer/>
    </section>
  )
}

export default SignUp