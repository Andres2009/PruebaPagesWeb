import React from "react";
import './cotizador.css'
export function Cotizador(){
    return(
        <div>
                <div className="container">
                        <div className="row row__Cotizador">
                            <div className="col-md-12 coll-sm-12 container__row__Cotizador">
                                <label className="label__row__Cotizador"> COTIZADOR </label>
                            </div>
                        </div>
                </div>
                <div className="row row__Cotizador">
                    <div className="col-md-12 coll-sm-12 row__iframe__Cotizador">
                         <iframe id="cotizador" src="https://aburramotos.7-24.co/mercadeo/leads/iframe/2f4c07b6b8b5abfee7ed89cd0befe0dd/" name="myIFrame" className="iframe__row__Cotizador"></iframe> 
                    </div>
                </div>
        </div>
    )
}

