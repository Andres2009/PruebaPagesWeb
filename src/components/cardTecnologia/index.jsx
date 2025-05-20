import React from "react";
import './cardTecnologia.css';
const CardTecnologia = ({Titulo, Texto, Imagen}) =>{
    return(
        <div className="col-md-3 col-sm-12" >
            <div className="card card__Tecnologia h-100">
                <img src={Imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                     <p className="card-title titulo__card__Tecnologia">{Titulo}</p>
                     <p className="card-text texto__card__Tecnologia">{Texto}</p>
            
                </div>
            </div>
        </div>
        
    )
}

export default CardTecnologia; 