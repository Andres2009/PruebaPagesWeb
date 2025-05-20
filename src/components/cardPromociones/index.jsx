import React from "react";

const CardPromociones = ({Url}) =>{
    return(
        <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center mb-4">
            <div className="card" style={{ width: '100%' }}>
                <img src={Url} className="card-img-top" />
            </div>
        </div>
    )
}
export default CardPromociones;