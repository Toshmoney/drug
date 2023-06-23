import React, { useEffect, useState } from 'react'

const Footer = () => {
    const [year, setYear] = useState('');
    useEffect(()=>{
        const date = new Date().getFullYear()
        setYear(date)
    },[])
  return (
    <footer>
        <div>
        &copy; {year} MediScan || All Rights Reserved.
        </div>
    </footer>
  )
}

export default Footer