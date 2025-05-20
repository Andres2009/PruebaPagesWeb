import { createContext, useState, useEffect } from 'react';
import { ObtenerProductos } from '../services/ServicioConsumo';
import axios from 'axios';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const response = await fetch('https://credimovil.7-24.co/apirest/consumo/?token=uq5-HvDeRU63_ENR&objeto=productos');
      console.log(response);

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Error del servidor: ${response.status} - ${errorData}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);

      console.error('Error al obtener productos:', error.message);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return <LanguageContext.Provider value={{ productos }}>{children}</LanguageContext.Provider>;
};
