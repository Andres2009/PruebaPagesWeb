import React from "react";
import "./cardPuntosVentas.css"
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
const CardPuntosVentas = ({Nombre, Direccion, Telefono}) =>{
    return(
       
            <div className="col-lg-12 col-md-12 col-sm-12 div__CardPuntosVentas">
                <div className="row">
                    <p className="titulo__CardPuntosVentas">{Nombre}</p>
                </div>
                <div className="row">
                    <p><IoLocationSharp /> {Direccion}</p>
                </div>
                <div className="row">
                <p> <IoMdCall />  {Telefono}</p>
                </div>
                <div className="row row__btn__CardPuntosVentas">
                     <button type="button" className="btn btn-primary  btn__CardPuntosVentas">¿Cómo llegar?</button>
                     
                </div>
            </div>
       
    )
}

export default CardPuntosVentas;