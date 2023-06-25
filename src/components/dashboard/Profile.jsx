
import React, { useEffect, useState } from 'react'
import "./dashboard.css"

const Profile = () => {

    const [prof, setProf] = useState(null)
    const [isActive, setIsActive] = useState(false);
    
    const handleToggle = ()=>{
        setIsActive(true)
    }
    const handleSwitch = ()=>{
        setIsActive(false)
    }

    useEffect(()=>{
        async function getProfile(){
            try {
                await fetch("https://drug-verification.onrender.com/profile")
                .then(response => response.json())
                .then(res => setProf(res))
            } catch (error) {
                console.log(error);
            }
        }

        getProfile()
    },[])

    if(!prof){
        return "Loading .."
    }
  return (
    <section className='aside-main-flex'>
        <aside className={isActive? "switch-aside":"aside"}>
            <div className='logo-section'>
                <h3>MediScan.</h3>
                <button className={isActive? "list-items btn":"btn"} onClick={handleToggle}>=</button>
            </div>

            <div className="aside-container">
                <div>
                    <ul className='aside-links'>
                        <li><a href="/dashboard">1<span className={isActive? "list-items":""}>Dashbaord</span></a></li>
                        <li><a href="/registered-drugs">2<span className={isActive? "list-items":""}>Registered Drugs</span></a></li>
                        <li><a href="/register-new-drug">3<span className={isActive? "list-items":""}> Register New Drug </span></a></li>
                        <li className='active-list'><a href="/profile">4<span className={isActive? "list-items":""}> Profile</span></a></li>
                    </ul>
                </div>

                <ul className='aside-links'>
                    <li><a href="/log-out">5<span className={isActive? "list-items":""}> Log Out</span></a></li>
                </ul>
            </div>
        </aside>
        <div className="main">
            <div className="top-side">
                <input type="search" placeholder='search ...' />
                <div> <button className={isActive? "btn":"list-items"} onClick={handleSwitch}>=</button></div>
            </div>

            <div className='half-main'>
               <h2>Company's Profile</h2>
               
               <div className="profile-section">
                    <div className="left">
                        <h4>Name: {prof.name}</h4>
                        <h4>CAC: {prof.cac}</h4>
                    </div>
                    <div className="right">
                        <h4>Email: {prof.email}</h4>
                        <h4>Reg Number: <span>{prof.regNumber}</span></h4>
                    </div>
               </div>
            </div>
        </div>
        
    </section>
  )
}

export default Profile;