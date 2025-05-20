import React from "react";
import "./botonWhatsapp.css"
import { FaWhatsapp } from 'react-icons/fa';
const BotonWhatsapp =() =>{
    return(
        <a
        href="https://wa.me/5491123456789" // cambia esto por tu número
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </a>
    )
}

export default BotonWhatsapp;