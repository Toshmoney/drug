import React from 'react';
import { useState } from 'react';
import "./dashboard.css";
import { Navigate } from 'react-router-dom';;

const NewDrug = () => {

    
    const [isActive, setIsActive] = useState(false);
    
    const handleToggle = ()=>{
        setIsActive(true)
    }
    const handleSwitch = ()=>{
        setIsActive(false)
    }


  const [redirect, setRedirect] = useState(false)

    const [drugData, setDrugData] = useState({
        drug_name:'',
        manufac_date:'',
        exp_date:'',
        drug_type:'',
        product_qty:'',
        nafdac:''
    })

    const handleDrugDetails = (event)=>{
        const {name, value} = event.target;
        setDrugData((prevData)=>{
          return{
            ...prevData,
            [name]:value
          }
        })
      };
      
        const handleSubmit = async(event)=>{
        event.preventDefault();

        if(!drugData.drug_name || !drugData.exp_date || !drugData.manufac_date){
            return alert("Missing fields!!")
        }
        const response = await fetch("http://localhost:7000/register-drug",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(drugData),
            credentials: 'include'
        })
        if (response.ok){
        alert("You have successfully registered new drug!")
        setRedirect(true)
        }
        }
    
    if(redirect){
        return <Navigate to={"/registered-drugs"} />
      }


  return (
    <section className='aside-main-flex'>
        <aside className={isActive? "switch-aside":"aside"}>
            <div className='logo-section'>
                <h3><a href="/">MediScan.</a></h3>
                <button className={isActive? "list-items btn":"btn"} onClick={handleToggle}>=</button>
            </div>

            <div className="aside-container">
                <div>
                    <ul className='aside-links'>
                        <li><a href="/dashboard">1<span className={isActive? "list-items":""}>Dashbaord</span></a></li>
                        <li><a href="/registered-drugs">2<span className={isActive? "list-items":""}>Registered Drugs</span></a></li>
                        <li className='active-list'><a href="/register-new-drug">3<span className={isActive? "list-items":""}> Register New Drug </span></a></li>
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
               <h2>Register New Drug</h2>
               
               <div className="sign-up-section">
                    <form action="" onSubmit={handleSubmit} className='sign-up-form'>
                        <div className="form-control">
                            <label htmlFor="drug-name">Drug Name:</label>
                            <input type="text" placeholder='Drug name' id='drug-name' name='drug_name' value={drugData.drug_name} onChange={handleDrugDetails} />
                        </div>

                        <div className="form-control">
                            <label htmlFor="drug-name">Drug Type:</label>
                            <input type="text" placeholder='Drug Type' id='drug-name' name='drug_type' value={drugData.drug_type} onChange={handleDrugDetails} />
                        </div>

                        <div className="form-control">
                            <label htmlFor="drug-name">Product Qty:</label>
                            <input type="text" placeholder='Product Qty' id='drug-name' name='product_qty' value={drugData.product_qty} onChange={handleDrugDetails} />
                        </div>

                        <div className="form-control">
                            <label htmlFor="drug-name">NAFDAC Reg Number:</label>
                            <input type="text" placeholder='NAFDAC Number' id='drug-name' name='nafdac' value={drugData.nafdac} onChange={handleDrugDetails} />
                        </div>

                        <div className="form-control">
                            <label htmlFor="manufac_date">Manufacturing date:</label>
                            <input type="text" placeholder='Manufac date' id='manufac_date' name='manufac_date' value={drugData.manufac_date} onChange={handleDrugDetails} />
                        </div>

                        <div className="form-control">
                            <label htmlFor="exp_date">Exp Date:</label>
                            <input type="text" placeholder='Exp date' id='exp_date' name='exp_date' value={drugData.exp_date} onChange={handleDrugDetails} />
                        </div>

                        <div>
                            <button type="submit" className='btn'>Register</button>
                        </div>
                    </form>
               </div>
            </div>
        </div>
        
    </section>
  )
}

export default NewDrug;