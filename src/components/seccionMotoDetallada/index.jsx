import React from "react";
import './seccionMotoDetallada.css'
const SeccionMotoDetallada = ({ImagenMoto, Titulo, Subtitulo, Descripcion_1, Descripcion_2, Motor,Cilindraje, Transmision}) =>{
    return (
    <div className="row contenido__seccionMotoDetallada h-100">
    <div className="col-lg-5 col-md-7 col-sm-12 mb-4">
      <div className="card card__SeccionMotoDetallada">
        <img src={ImagenMoto} className="card-img-top imagen__seccionMotoDetallada" alt="..." />
      </div>
    </div>
    <div className="col-lg-7 col-md-5 col-sm-12">
      <div className="descripcion__seccionMotoDetallada">
        <label className="titulo__seccionMotoDetallada">{Titulo}</label><br />
        <label className="subtitulo_seccionModoDetallada">{Subtitulo}</label>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <label className="descripcion__seccionMotoDetallada">{Descripcion_1}</label>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <label className="descripcion__seccionMotoDetallada">{Descripcion_2}</label>
        </div>
      </div>
      <div className="row footer__descripcion__seccionMotoDetallada">
        <div className="col-lg-4 col-md-4 col-sm-12 footer__div__seccionDetallada">
            <label className="footer__label__seccionMotoDetallada">MOTOR</label>
            <p className="footer__p__seccionMotoDetallada">{Motor}</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 footer__div__seccionDetallada">
            <label className="footer__label__seccionMotoDetallada">CILINDRAJE</label>
            <p className="footer__p__seccionMotoDetallada">{Cilindraje}</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 footer__div__seccionDetallada">
            <label className="footer__label__seccionMotoDetallada">TRANSMISIÓN</label>
            <p className="footer__p__seccionMotoDetallada">{Transmision}</p>
        </div>
      </div>
    </div>
  </div>

    )

}

export default SeccionMotoDetallada;