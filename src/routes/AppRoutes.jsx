import React, { useRef } from "react";
import { Route, Routes, HashRouter as BrowserRouter } from "react-router-dom";
import Navbar from './../components/navbar'
import Footer from './../components/footer'
import { Home } from "../pages/home"; 
import {Cotizador} from "../pages/cotizador"
import {Posventa} from "../pages/posventa"
import {Promociones} from "../pages/promociones"
import { Visitanos } from "../pages/visitanos";
import ModalContacto from "./../components/modalContacto"
import BotonWhatsapp from "./../components/botonWhatsapp";
function AppRoutes() {
  const modalReferencia = useRef(null);
  const handleMostrarModal = () => {
    const modal = new window.bootstrap.Modal(modalReferencia.current);
    modal.show();
  };
  return (
    
    <BrowserRouter> 
     <Navbar onAbrilModal={handleMostrarModal}/>
     <ModalContacto modalReferencia={modalReferencia}/>
     <BotonWhatsapp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cotizacion" element={<Cotizador/>} />
        <Route path="/postventa" element={<Posventa/>} />
        <Route path="/promociones" element={<Promociones/>} />
        <Route path="/visitanos" element={<Visitanos/>} />
        <Route path="*" element={<s style={{fontSize:'100px'}}>404 - LOST</s>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;