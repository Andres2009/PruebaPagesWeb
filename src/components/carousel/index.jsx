import React from "react";
import {jsonImagenCarousel} from "../../constants/constants"
import './carousel.css';
function Carousel(){
    return(
        <div id="carouseContenido" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {jsonImagenCarousel.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouseContenido"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {jsonImagenCarousel.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={item.ruta} className="d-block w-100 carousel__Imagen" alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouseContenido" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouseContenido" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    )
}

export default Carousel