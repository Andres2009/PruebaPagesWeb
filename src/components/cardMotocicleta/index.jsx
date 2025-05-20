import React from "react";
import "./cardMotocicleta.css"

const CardMotocicleta = ({Marca,NombreProducto ,Modelo,Imagen,Precio, Cilindraje}) => {
    return(
        <div className="col-lg-4 col-md-6 col-sm-12 div__Contenido__card__Motocicleta" >
        <div className="card card__Motocicleta h-100">
            <div className="card-title card__Motocicleta__linea__padre">
                <div className="card__Motocicleta__titulo">
                    <p>{Cilindraje}</p>
                </div>
            </div>
            <img src={Imagen} className="card-img-top" alt="..."/>
            <div className="card__Motocicleta__linea__padre">
                <div className="col-lg-12 col-md-12 col-sm-12 card__Motocicleta__linea"></div>
            </div>
          

            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 marca__card__Motocicleta" >
                        <p>{Marca}</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 modelo__card__Motocicleta" >
                         <p>{Modelo}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 marca__card__Motocicleta" >
                        <p>{NombreProducto}</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 modelo__card__Motocicleta" >
                        <div className="card__precio__Motocicleta">
                            {Precio}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default CardMotocicleta;