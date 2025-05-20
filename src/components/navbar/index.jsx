import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {navItems} from '../../constants/constants'
import './navbar.css'


const Navbar =({onAbrilModal})=> {
    const [isActive, setIsActive] = useState(false);
  
    const navToggle = () => {
      setIsActive(!isActive);
    };
    
    const handleClickModal =(item)=>{
      if(item === 'CONTÁCTANOS'){
        onAbrilModal();
      }
    }
    return (
      <nav className="nav">
        <Link to="/">
          <img
            src="/images/logoAburraM.png"
            alt="Logo Aburrá Motos"
            className="ImagenLogo"
          />
        </Link>
            <ul className={`nav__menu ${isActive ? "nav__active" : ""}`}>
            {navItems.map((item, index) => (
                <li className="nav__item" key={index}>
                 <Link to={item.ruta} 
                       className="nav__link"
                       onClick={()=> handleClickModal(item.label)} > 
                    {item.label}
                 </Link>
                {item.submenu && (
                    <ul className="submenu">
                    {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="submenu__item">
                        <a href="#" className="submenu__link">
                            {subItem}
                        </a>
                        </li>
                    ))}
                    </ul>
                )}
                </li>
            ))}
            </ul>
        <div
          onClick={navToggle}
          className={`nav__toggler ${isActive ? "toggle" : ""}`}
        >
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </nav>
    );
  }
export default Navbar;