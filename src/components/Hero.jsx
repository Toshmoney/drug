import React from 'react';
import digital from "../drug.jpg"

const Hero = () => {
  return (
    <section className='hero'>
            <div className="hero-text">
                <h2>The Ultimate Drug Verification Software</h2>
                <p>Are you tired of the uncertainty surrounding the medications you consume? Look no further! Get Started with MediScan, the groundbreaking
                  drug verification software that ensures your safety and peace of mind. With MediScan by your side, you can trust the medicines you rely on.</p>
                <div><a href="/about" className='btn'>Learn More</a></div>
            </div>
            <div className="hero-text">
                <img src={digital} alt="" />
            </div>
        </section>
  )
}

export default Hero