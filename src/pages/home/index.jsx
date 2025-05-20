import React from "react";
import Carousel from "../../components/carousel";
import CardTecnologia from "../../components/cardTecnologia";
import {jsonCardTecnologia,jsonSeccionMotoDetallada,jsonBarraPorcentaje,jsonSeccionBarraPorcentaje,jsonTituloSeccionBarraPorcentaje, jsonDescripcionTecnica,jsonLinkMarcas} from "../../constants/constants"
import SeccionMotoDetallada from "../../components/seccionMotoDetallada";
import BarraPorcentaje from "../../components/barraPorcentaje";
import SeccionBarraPorcentaje from "../../components/seccionBarraPorcentaje";
import TituloSeccionBarraPorcentaje from "../../components/tituloSeccionBarraPorcentaje";
import DescripcionSeccionBarraPorcentaje from "../../components/descripcionSeccionBarraPorcentaje";
import VideoPublicitario from "../../components/videoPublicitario";
import MarcasPublicitarias from "../../components/marcasPublicitaria";
import CatalogoMoto from "../../components/catalogoMoto";
import './home.css';
export function Home() {
 
  return (
    <div className="">
        <div className="contenedor__imagen__HomePulsar">
              
                <div className="btn__imagen__HomePulsar" >
                     <button type="button" className="btn btn-primary btn__HomePulsar">VER MÁS</button>
               
              </div> 
        </div>
        {/* <div className="contenedor__carousel__row">
        <div className="row">
                <div className="col-md-12 col-sm-12 div__carousel__Home">
                    <Carousel/> 
                </div>
        </div> 
        </div> */}
        <div className="container">
        <div className="row">
                <div className="col-md-12 col-sm-12 div__carousel__Home">
                    <Carousel/> 
                </div>
        </div> 
            <div className="row">
               <div className="col-md-12 col-sm-12 row__pioneros__home">
                    <p className="pioneros__home">Pioneros en</p>
                    <p className="tecnologia__home">TECNOLOGÍA EFICIENTE Y ACCESIBLE</p>
                </div>
            </div>
            <div className="row">
               {jsonCardTecnologia.map((item, indice)=>(
                   <CardTecnologia 
                      key={indice}
                      Titulo={item.titulo}
                      Texto={item.texto}
                      Imagen={item.imagen}
                   />
               ))}
                   
            </div>
            <div className="row div__padding__centro">
               {jsonSeccionMotoDetallada.map((item, indice)=>(
                  <SeccionMotoDetallada
                      key={indice}
                      ImagenMoto={item.imagen}
                      Titulo={item.titulo}
                      Subtitulo={item.subtitulo}
                      Descripcion_1={item.descripcion_1}
                      Descripcion_2={item.descripcion_2}
                      Transmision={item.transmision}
                      Cilindraje={item.cilindraje}
                      Motor={item.motor}
                  />
               ))}
            </div>
            <div className="row">
                <CatalogoMoto/>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                   <img src="/images/pulsarns200.png" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="..."/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="row">
                     <TituloSeccionBarraPorcentaje
                        Titulo={jsonTituloSeccionBarraPorcentaje.titulo}
                        Subtitulo={jsonTituloSeccionBarraPorcentaje.subtitulo}
                     />
                  </div>
                  <div className="row">
                    {jsonBarraPorcentaje.map((item, indice)=>(
                        <BarraPorcentaje
                        key={indice}
                        porcentaje={item.porcentaje}
                        color={item.color}
                        titulo={item.titulo}
                      />
                    ))}
                  </div>
                 
                  <div className="row">
                    {jsonSeccionBarraPorcentaje.map((item , indice)=>(
                        <SeccionBarraPorcentaje
                          key={indice}
                          Motor={item.motor}
                          Cilindraje={item.cilindraje}
                          potencia={item.potencia}
                        />
                    ))}
                  </div>
              </div>

            </div>
            <div className="row contenido__label__Especificacion">
              <label className="EspecificacionesTecnicas__Titulo__Home">ESPECIFICACIONES TECNICAS </label>
            </div>
            <div className="row">
              {jsonDescripcionTecnica.map((item, indice)=>(
                <DescripcionSeccionBarraPorcentaje
                  key={item.titulo}
                  Titulo = {item.titulo}
                  Descripcion={ item.descripcion}
                />
              ))}
            </div>

            <div className="row">
                <VideoPublicitario Link="https://www.youtube.com/embed/xEMmTqfCaGI?controls=1&loop=1&rel=0playsinline=1&cc_load_policy=0&autoplay=1&enablejsapi=1&origin=https%3A%2F%2Faburramotos.com&widgetid=1&forigin=https%3A%2F%2Faburramotos.com%2F&aoriginsup=1&vf=1"/>
            </div>
            <div className="row contenido__label__Especificacion">
              <label className="NuestraMarca__Titulo__Home">NUESTRAS MARCAS </label>
            </div>
            <div className="row">
                {jsonLinkMarcas.map((item, index)=>(
                  <MarcasPublicitarias
                    key={index}
                    Link={item.url}
                  />
                ))}
            </div>
            <div className="row contenido__label__Especificacion">
              <label className="NuestraMarca__Titulo__Home">ALIADOS FINANCIEROS</label>
            </div>
        </div>
    </div>

  );
}

