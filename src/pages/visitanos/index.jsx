import React from "react";
import "./visitanos.css"
import CardPuntosVentas from "../../components/cardPuntosVentas";
import {jsonPuntosVentas} from "../../constants/constants"
export function Visitanos(){
    return(
        <div>
            <div className="container">
                    <div className="row row__Visitanos">
                        <div className="col-md-12 coll-sm-12 container__row__Visitanos">
                            <label className="label__row__Cotizador"> ENCUENTRA TU PUNTO DE VENTA MÁS CERCANO AQUÍ </label>
                        </div>
                    </div>
            </div>
            <div className="row row__Visitanos__ubicacion">
          
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="ratio ratio-4x3 custom-map">
                        <iframe id="iframeMaps" 
                                src="https://www.google.com/maps/d/embed?mid=11eqJEo2GZ7aIZ1cjzDGcuu-nSAmwgmE&amp;ehbc=2E312F"   
                                allowFullScreen>

                        </iframe>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 contenido__cardPuntosVentas__Visitanos">
                  <div className="container">
                    {jsonPuntosVentas.map((item, indice)=>(
                            <CardPuntosVentas 
                                key={indice}
                                Nombre={item.nombre}
                                Direccion={item.direccion}
                                Telefono={item.telefono}
                            />
                    ))}
                  </div>  
                </div>
            </div>
        </div>
    )
} 