import React from "react";
import "./cardMarcaMoto.css"


const CardMarcaMoto = ({Titulo, Descripcion, Imagen}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">    
        <div className="container d-flex  mt-5">
          <div className="card hover-zoom-card shadow-border w-100 overlay-card ">
            <img
              src={Imagen}
              className="card-img-top"
              alt=""
            />
            <div className="card-img-overlay d-flex flex-column justify-content-between">
                <div className="align-self-start contenedor__titulo__CardMarcaMoto">
                        <label className="card-title titulo__CardMarcaMoto">{Titulo}</label>
                </div>
                <div className="contenedor__descripcion__CardMarcaMoto">
                      <p className="card-text">
                        {Descripcion}
                    </p>
                </div>
        </div>
          </div>
        </div>
        </div>
      );
}

export default CardMarcaMoto;