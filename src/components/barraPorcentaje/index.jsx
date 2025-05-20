import React from "react";
import './barraPorcentaje.css'
const BarraPorcentaje = ({porcentaje, color,titulo})=>{
    return(
        <div className="div__contenido__procentajeBarra">
            <div className="titulo__porcentajeBarra">
                <label className="titulo__t__porcentajeBarra">{titulo}</label>
            </div>
            <div className="progress">
            <div
            className="progress-ba progress-bar-animada d-flex align-items-center justify-content-end pe-4"
            role="progressbar"
            style={{
                '--target-width': `${porcentaje}%`,
                backgroundColor: color,
                color:"white",
                fontSize:"10px"

            }}
            aria-valuenow={porcentaje}
            aria-valuemin="0"
            aria-valuemax="100"
            >
            {porcentaje}%
            </div>
        </div>
      </div>
    )
}

export default BarraPorcentaje;