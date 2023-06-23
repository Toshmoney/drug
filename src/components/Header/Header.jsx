import React, { useState } from 'react'

const Header = () => {
    const [isToggle, setIsToggle] = useState(false);
    const toggleMenu = ()=>{
       if(isToggle === true){
        setIsToggle(false)
       }else{
        setIsToggle(true)
       }
    }
  return (
    <div>
        <nav>
            <div>
                <h2 className="logo"><a href="/">MediScan.</a></h2>
            </div>
                <ul className="desktop-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/report-fake-drug">Report fake drug</a></li>
                    <a href='/sign-up' className='btn'>Sign Up</a>
                </ul>
                <button className='toggler btn' onClick={toggleMenu}>=</button>
        </nav>
                <ul className={isToggle?"show-nav": "mobile-nav"}>
                <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/report-fake-drug">Report fake drug</a></li>
                    <a href='/sign-up' className='btn'>Sign Up</a>
                </ul>
    </div>
  )
}

export default Header