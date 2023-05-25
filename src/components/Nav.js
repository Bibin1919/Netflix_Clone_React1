import React, { useEffect, useState } from 'react';
import './Nav.css';
import logo from './logo.png';

function Nav() {
    const [show,setShow] = useState(false)
  
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>600){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    })

    return (
    <div className={`nav ${show&&'blackNav'}`}>
        <img
        style={{width:'150px' }}
        src={logo} 
        alt='Logo' />
    </div>
  )
}

export default Nav