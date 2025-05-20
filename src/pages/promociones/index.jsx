import React from "react";
import CardPromociones from "../../components/cardPromociones";
import "./promociones.css"
import {jsonLinkPromociones} from "../../constants/constants"

export function Promociones(){
    return(
   <div>
                <div className="container">
                        <div className="row row__Promociones">
                            <div className="col-md-12 coll-sm-12 container__row__Promociones">
                                <label className="label__row__Promociones"> ABURRA MOTOS PROMOCIONES DISPONIBLES </label>
                            </div>
                        </div>

                </div>
                <div className="row__card__imagenes__promociones">
                <div className="container" >
                    <div className="row" >
                    {jsonLinkPromociones.map((item, index)=>(
                        <CardPromociones 
                            key={index}
                            Url={item.url} 
                        />

                    ))}
                    </div>
                   
                </div>
                </div>
 </div>
      
    )
}