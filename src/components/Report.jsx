import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import "./about.css"
const Report = () => {

    const [redirect, setRedirect] = useState(false)

    const [reportDrug, setReportDrug] = useState({
        drug_name:'',
        drug_code:'',
        drug_price: '',
        pharm_name:'',
        state:'',
        local_gov:''
    })

    const handleDrug = (event)=>{
        const {name, value} = event.target;
        setReportDrug((prevData)=>{
          return{
            ...prevData,
            [name]:value
          }
        })
      };
      
    const handleSubmit = async(event)=>{
      event.preventDefault();

      if(!reportDrug.drug_code || reportDrug.drug_name || reportDrug.drug_price || reportDrug.pharm_name || reportDrug.state || reportDrug.local_gov){
        alert("Missing fields!!!")
      }
      const response = await fetch("http://localhost:7000/report",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(reportDrug)
    })
    if (response.ok){
      alert("You have successfully reported this drug!")
      setRedirect(true)
    }
    }
    
    if(redirect){
        return <Navigate to={"/"} />
      }

  return (
    <section>
        <Header/>
        <div className='report-section'>
            <div className='report-text'>
                <h2>Are you suspecting any drugs to be fake?</h2>
                <p>Kindly fill the form below to report the suspected drug!</p>
            </div>
            <form action="" className='report-form' onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="drug-name">Drug Name:</label>
                    <input type="text" id='drug-name' placeholder='Enter the drug name' name='drug_name' value={reportDrug.drug_name} onChange={handleDrug} />
                </div>
                <div className="form-control">
                    <label htmlFor="drug-code">Drug Code:</label>
                    <input type="text" id='drug-code' placeholder='Enter the drug code' name='drug_code' value={reportDrug.drug_code} onChange={handleDrug} />
                </div>

                <div className="form-control">
                    <label htmlFor="drug-price">Drug Price:</label>
                    <input type="text" id='drug-price' placeholder='How much is the drug?' name='drug_price' value={reportDrug.drug_price} onChange={handleDrug} />
                </div>

                <div className="form-control">
                    <label htmlFor="pharmacy">Pharmacy name:</label>
                    <input type="text" id='pharmacy' placeholder='Enter the pharmacy name' name='pharm_name' value={reportDrug.pharm_name} onChange={handleDrug} />
                </div>

                <div className="form-control">
                    <label htmlFor="state">State:</label>
                    <input type="text" id='state' placeholder='Enter the state' name='state' value={reportDrug.state} onChange={handleDrug} />
                </div>
                <div className="form-control">
                    <label htmlFor="local-gov">Local Govt:</label>
                    <input type="text" id='local-gov' placeholder='Enter the local gov.' name='local_gov' value={reportDrug.local_gov} onChange={handleDrug} />
                </div>

                <div><button className='btn'>Report!</button></div>
            </form>
        </div>
        <Footer/>
    </section>
  )
}

export default Report