import React from "react";
import "./catalogoMoto.css"
import CardMarcaMoto from "../../components/cardMarcaMoto"
import CardMotocicleta from "../../components/cardMotocicleta"
import {jsonCardMarcasMotos} from "../../constants/constants"

const CatalogoMoto = () => {
    return(
        <div>
            <div className="row row__CatalogoMoto">
                <p className="Titlulo__CatalogoMoto">NUESTRAS MOTOCICLETAS</p>

                {jsonCardMarcasMotos.map((item, index)=>(

                   <CardMarcaMoto 
                        key={index}
                        Titulo={item.titulo}
                        Descripcion={item.descripcion}
                        Imagen={item.imagen}
                   
                   />
                ))}          
            </div>
            <div className="row">
                <CardMotocicleta 
                    Imagen="https://aburramotos.7-24.co/userfiles/productos/thumbnails/600_BOXER_S.JPG" 
                    Cilindraje="102 CC" 
                    Modelo="2026"
                    NombreProducto="BOXER S"    
                    Precio="$5,499,000"
                    Marca="BAJAJ"
                />     
                  <CardMotocicleta 
                    Imagen="https://aburramotos.7-24.co/userfiles/productos/thumbnails/600_DISCOVER_125.JPG" 
                    Cilindraje="124.45 CC" 
                    Modelo="2026"
                    NombreProducto="DISCOVER 125 ST SPORT"    
                    Precio="$7,399,000"
                    Marca="BAJAJ"
                /> 
                   <CardMotocicleta 
                    Imagen="https://aburramotos.7-24.co/userfiles/productos/thumbnails/600_BOXER_S.JPG" 
                    Cilindraje="102 CC" 
                    Modelo="2026"
                    NombreProducto="BOXER S"    
                    Precio="$5,499,000"
                    Marca="BAJAJ"
                /> 
 
           </div>
        </div>
        
    )

}

export default CatalogoMoto;