import React from "react";
import "./seccionBarraPorcentaje.css"

const SeccionBarraPorcentaje = ({Motor, Cilindraje, potencia}) =>{
    return(
        <div className="row contenido__seccionBarraPorcentaje">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <label className="titulo__seccionBarraPorcentaje">MOTOR</label>
                 <p className="p__seccionBarraPorcentaje">{Motor}</p>
              
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                 <label className="titulo__seccionBarraPorcentaje">CILINDRAJE</label>
                    <p className="p__seccionBarraPorcentaje">{Cilindraje}</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <label className="titulo__seccionBarraPorcentaje">MÁXIMA POTENCIA</label>
                 <p className="p__seccionBarraPorcentaje">{potencia}</p>
             
            </div>
        </div>
    )
}

export default SeccionBarraPorcentaje;