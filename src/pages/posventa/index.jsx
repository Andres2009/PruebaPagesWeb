import React from "react";
import "./posventa.css"
export function Posventa ({Titulo}){
    return(
        <div>
                <div className="container">
                        <div className="row row__Posventa">
                            <div className="col-md-12 coll-sm-12 container__row__Posventa">
                                <label className="label__row__Posventa"> ABURRAMOTOS SERVICIOS DE POST VENTA </label>
                            </div>
                        </div>

                    <div className="row row__Posventa">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="titulo__Posventa fs-1 fs-md-2 fs-sm-4">TALLERES AUTORIZADOS, REPUESTOS Y ACCESORIOS</p><br></br>
                        <p className="descripcion__Posventa">Tenemos múltiples centros de servicio técnico autorizado a lo amplio del territorio nacional, también contamos con miles de repuestos originales a tu disposición y cientos de accesorios para disfrutar al máximo cada experiencia con tu moto. <br></br>Te invitamos a que agendes tu cita de revisión especializada llenando nuestro formulario, o conoce donde se ubican nuestros Talleres Autorizados y sus números de contacto para mayor información.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card card__Posventa">
                            <div className="card-body contenido__card__Posventa">
                                <p className="titulo__card__Posventa fs-1 fs-md-2 fs-sm-4">¿NECESITAS UN REPUESTO BAJA?</p>
                                <p className="subtitulo__card__Posventa">Llena el formulario y nos pondremos en contacto</p><br></br>
                                <input className="form-control input__card__Posventa" type="text" placeholder="Nombre" aria-label=""></input>
                                <input className="form-control input__card__Posventa" type="text" placeholder="Celular" aria-label=""></input>
                                <input className="form-control input__card__Posventa" type="text" placeholder="Motocicleta" aria-label=""></input>
                                <input className="form-control input__card__Posventa" type="text" placeholder="Modelo" aria-label=""></input>
                                <input className="form-control input__card__Posventa" type="text" placeholder="Repuesto" aria-label=""></input>
                                <input className="form-control input__card__Posventa" type="text" placeholder="Ciudad" aria-label=""></input>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label">
                                         Al enviar este formulario autorizo el tratamiento de datos personales en los términos descritos.
                                    </label>
                                </div>
                               
                            </div>
                            <div className="contenido__btn__card__Posventa">
                                  <button type="button" className="btn btn-primary btn__card__Posventa">Enviar</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}

