import { createContext, useState, useEffect } from 'react';
import { ObtenerProductos } from '../services/ServicioConsumo';
import axios from 'axios';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const res = await axios.get('https://credimovil.7-24.co/apirest/consumo/?token=uq5-HvDeRU63_ENR&objeto=productos');
      console.log(res.data);
    } catch (error) {
      console.error('Error al obtener productos:', error.message);
      if (error.response) {
        console.error('Detalles del servidor:', error.response.data);
      } else if (error.request) {
        console.error('No hubo respuesta del servidor.');
      } else {
        console.error('Error desconocido:', error);
      }
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return <LanguageContext.Provider value={{ productos }}>{children}</LanguageContext.Provider>;
};
