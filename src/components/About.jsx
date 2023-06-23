import React from 'react';
import "./about.css"
import Header from './Header/Header';
import Footer from './Footer/Footer';

const About = () => {
  return (
    <section className='container'>
        <Header/>

        <div className="main-about">
            <div className="d-flex">
                <h2>About MediScan</h2>
                <p>MediScan is a drug verification & management system developed by Assayouti Zakariyah Opeyemi which ensures your safety and peace of mind by allowing you 
                    to check drug authenticity and detect a counterfeit drug instantly! <br /> Here's why MediScan is the best you've been waiting for:</p>
            </div>
            <div className="hero-grid-2">
                <div>
                    <h3>1. Authenticity At Your Finger Tips</h3>
                    <p>With just a few clicks, MediScan empowers you to verify the authenticity of any drug. No more guessing 
                        game or doubts about counterfeit medications. Our advanced technologies instantly cross-references the 
                        drug's unique identifier against verified databases, ensuring you only consume genuine and trustworthy products.</p>
                </div>

                <div>
                    <h3>2. Rapid And Reliable Results</h3>
                    <p>Time is of the essence when it comes to your health. That's why MediScan provides lightning-fast results,
                        delivering accurate verification outcomes within seconds. Gone are the days of waiting in uncertainty.
                        With MediScan, you can make informed decisions swiftly, protecting yourself and your loved ones.
                    </p>
                </div>

                <div>
                    <h3>3. Comprehensive Database</h3>
                    <p>We understand that safety goes beyond a single drug. That's why MediScan maintains an extensive database of 
                        medications, covering a vast range of products from different manufacturers. Whether it's over-the-counter drugs 
                        or prescription medications, our software has you covered, providing comprehensive verification results to ensure your well-being.
                    </p>
                </div>

                <div>
                    <h3>4. Uncompromising Security</h3>
                    <p>We prioritize the privacy and security of our users. MediScan employs state-of-the-art encryption and data 
                        protection measure to safeguard your personal information. Rest assured that your data is secured with us, as 
                        we adhere to the highest standards of confidentiality.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default About