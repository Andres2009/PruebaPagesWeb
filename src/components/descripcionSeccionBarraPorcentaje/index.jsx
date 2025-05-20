import React from "react";
import "./descripcionSeccionBarraPorcentaje.css"

const DescripcionSeccionBarraPorcentaje = ({Titulo, Descripcion}) =>{
    return(

            <div className="col-lg-3 col-md-4 col-sm-12 contenido__descripcionSeccionBarraPorcentaje">
                <label className="titulo__descripcionSeccionBarraPorcentaje">{Titulo}</label><br></br>
                <label className="subtitulo__descripcionSeccionBarraPorcentaje">{Descripcion}</label>
            </div>

    )
}

export default DescripcionSeccionBarraPorcentaje;