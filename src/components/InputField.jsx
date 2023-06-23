import React, { useState } from 'react'

const InputField = () => {

    const [drug, setDrug] = useState(null);
    const [code, setCode] = useState('')
    const handleCode = (e)=>{
        const {value} = e.target;
        setCode(value)
    }

    const handleSubmit = async(event)=>{
        try {
        event.preventDefault()
        if(!code){
            alert("Please enter a drug verification code")
            setDrug(null)
        }

            const url = `http://localhost:7000/drug/${code}`
            const responseData = await fetch(url)
            .then(response => response.json()).then(res => setDrug(res))

        if(!responseData.ok){
          alert("There was an error!!")
        }else{
            alert("done")
        }
        } catch (error) {
            console.log(error);
        }

        
    }
  return (
    <section>
        <div className='mediscan'>
            <div className='intro'>
                <h3>Check authenticity of the drug you're about to consume!</h3>
                <p>Don't compromise on your health and well-being. Choose Mediscan as your trusted companion in the world of medication verification. 
                    Together, let's eliminate counterfeit drugs, promote safety, and ensure a healthier future for all.
                </p>
            </div>
        </div>
            <form action="" className='form-url' onSubmit={handleSubmit}>
                <div className='form-col'>
                    <input type="text" placeholder='Enter drug code' id='url' name='code' value={code} onChange={handleCode} />
                </div>
                <div className="form-btn">
                    <button className='btn'>Check</button>
                </div>
            </form>

            {
                drug ? (
                    <div className="searched-drug">

                    <ul>
                        <li>Drug name: {drug.drug_name ? drug.drug_name : `'${code}' not found in our database`}</li>
                        <li>Drug Qty: {drug.product_qty ? drug.product_qty : "Fake Drug"}</li>
                        <li>Authenticity: {drug.isAuthentic ? "Original Drug" : "Fake Drug"}</li>
                        <li>Manufacturing dates: {drug.manufac_date ? drug.manufac_date : "Nill"}</li>
                        <li>Expiring dates: {drug.exp_date ? drug.exp_date : "Nill"}</li>
                        <li>Producer: {drug.owner ? drug.owner.name : "Nill"}</li>
                        <li>Analytics: {drug.count ? drug.count + " checked, through verification code": "Nill"}</li>
                    </ul>

                    { drug.drug_name ? "" : <a href="/report-fake-drug">Kindly Report this drug</a>}
              {/* <h3>No drug found! Suspected to be fake.</h3> */}
            </div>
                ): ""
            }
        </section>
  )
}

export default InputField