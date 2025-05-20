import React from "react";
import "./marcasPublicitarias.css"
const MarcasPublicitarias =({Link})=>{
    return(
        <div className="col-lg-2 col-md-2 col-sm-12 contenido__MarcasPublicitarias">
            <img src={Link} className="img-fluid imagen__MarcasPublicitarias"/>
        </div>
    )
}

export default MarcasPublicitarias;