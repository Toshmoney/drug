import React, { useState } from 'react'
import "./dashboard.css"

const Drugs = () => {
    const [isActive, setIsActive] = useState(false);
    
    const handleToggle = ()=>{
        setIsActive(true)
    }
    const handleSwitch = ()=>{
        setIsActive(false)
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
                        <li className='active-list'><a href="/registered-drugs">2<span className={isActive? "list-items":""}>Registered Drugs</span></a></li>
                        <li><a href="/register-new-drug">3<span className={isActive? "list-items":""}> Register New Drug </span></a></li>
                        <li><a href="/profile">4<span className={isActive? "list-items":""}> Profile</span></a></li>
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
                <h2 className='recent-drugs-title'>Recent Registered Drugs:</h2>
                <div className="recent-drugs">
                    <ul>
                        <li className='drug-list-title'>
                            <span className='name'>Name</span>
                            <span className='checked'>Number of time checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Paracetamol</span>
                            <span className='drug-name'>85000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Pherol</span>
                            <span className='drug-name'>28000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Chemerol</span>
                            <span className='drug-name'>1300 checked</span>
                        </li>

                        <li className='drug-list'>
                            <span className='drug-name'>ACF</span>
                            <span className='drug-name'>30000 checked</span>
                        </li>

                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Paracetamol</span>
                            <span className='drug-name'>85000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Pherol</span>
                            <span className='drug-name'>28000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Chemerol</span>
                            <span className='drug-name'>1300 checked</span>
                        </li>

                        <li className='drug-list'>
                            <span className='drug-name'>ACF</span>
                            <span className='drug-name'>30000 checked</span>
                        </li>

                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                        <li className='drug-list'>
                            <span className='drug-name'>Arthemeter</span>
                            <span className='drug-name'>25000 checked</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Drugs