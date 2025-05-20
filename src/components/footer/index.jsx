import React from "react";
import { FaFacebook,FaAngleRight } from "react-icons/fa";
import { FaInstagram,FaWhatsapp } from "react-icons/fa6";
import './footer.css'
function Footer(){
    return(
        <footer className="contenido__Footer">
           <div className="container">
           <div className="row">
                <div className="col-md-4 col-sm-12 contenido__logo__footer">
                    <div className="row contenido__logo__footer">
                      <img src="/images/logoAburraM.png"  alt="Logo Aburrá Motos"className="logo__Footer"/>
                    </div>
                    <div className="row">
                      <p>BAJAJ / La marca # 1 de Colombia <br></br> Distribuidor autorizado</p>
                    </div>
                    <div className="row">
                      <p>REDES SOCIALES</p>
                      <div className="col-lg-12 col-md-12 col-sm-12 d-flex gap-4 contenido__logo__footer">
                        <FaFacebook size={20}/> <FaInstagram size={20}/> <FaWhatsapp size={20}/>
                      </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="row">
                      <p>EXPLORA</p>
                    </div>
                    <div className="row">
                      <p><FaAngleRight className="icono__right__footer"/> Inicio</p>
                    </div>
                    <div className="row">
                      <p><FaAngleRight className="icono__right__footer"/> Motos</p>
                    </div>
                    <div className="row">
                      <p><FaAngleRight className="icono__right__footer"/> Cotizar moto</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="row">
                      <p>NOSOTROS</p>
                    </div>
                    <div className="row">
                      <p><FaAngleRight className="icono__right__footer"/> Puntos de venta</p>
                    </div>
                    <div className="row">
                      <p><FaAngleRight className="icono__right__footer"/> Postventa</p>
                    </div>
                    <div className="row">
                      <p><FaAngleRight className="icono__right__footer"/> Tratamiento de datos</p>
                    </div>
                </div>
           </div>
           </div>
        </footer>
    )
}

export default Footer;