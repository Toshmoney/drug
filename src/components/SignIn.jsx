import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Footer from './Footer/Footer';

const SignIn = () => {

    const [redirect, setRedirect] = useState(false)

    const [userDetails, setUserDetails] = useState({
        email:'',
        password:'',
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
  if(!userDetails.email || !userDetails.password){
    return alert("Missing field!!")
  }
  const response = await fetch("https://drug-verification.onrender.com/sign-in",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body:JSON.stringify(userDetails),
})
if (response.ok){
  alert("Logged In successfully!")
  setRedirect(true)
}else{
    alert("Login was not successful!")
    setRedirect(false)
}
}

if(redirect){
    return <Navigate to={"/dashboard"} />
  }

  return (
    <section className='sign-up-section'>
            <div className='sign-up-text'>
                <h2>Welcome Back!</h2>
                <p>Sign into your account</p>
            </div>
        <main className='sign-in-main'>
            <form action="" className='sign-up-form sign-in' onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' placeholder='email' name='email' value={userDetails.email} onChange={handleUserDetails} />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='password' name='password' value={userDetails.password} onChange={handleUserDetails} />
                </div>
                
                <div>
                    <button className='btn'>Sign In</button>
                </div>
                <div>
                    <h3>Don't have an account? <a href="/sign-up">sign up</a></h3>
                </div>
            </form>
           
        </main>
        <Footer/>
    </section>
  )
}

export default SignIn;