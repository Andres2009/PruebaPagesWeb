import React from "react";
import "./tituloSeccionBarraPorcentaje.css"

const TituloSeccionBarraPorcentaje = ({Titulo, Subtitulo}) =>{
    return(
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <label className="titulo__TitluloSeccionBarraPorcentaje">{Titulo}</label>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <label className="subtitulo__TitluloSeccionBarraPorcentaje">{Subtitulo}</label>
            </div>
        </div>
    )
}

export default TituloSeccionBarraPorcentaje;