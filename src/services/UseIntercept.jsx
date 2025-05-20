import axios from 'axios';
const url = 'https://credimovil.7-24.co/apirest/consumo/?token=uq5-HvDeRU63_ENR&objeto=productos';
const API_BASE_URL = url;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 40000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiClientFormData = axios.create({
  baseURL: API_BASE_URL,
  timeout: 40000,
  headers: { 'Content-Type': 'multipart/form-data' },
});

const apiClientArch = axios.create({
  baseURL: API_BASE_URL,
  timeout: 40000,
  headers: {},
});

// apiClient.interceptors.request.use(
//   async (config) => {
//     try {
//       const token = await obtenerToken();
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     } catch (error) {
//       console.error('Error al agregar el token:', error);
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

apiClientArch.interceptors.request.use(
  async (config) => {
    try {
      const token = await obtenerToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error al agregar el token:', error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClientFormData.interceptors.request.use(
  async (config) => {
    try {
      const token = await obtenerToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error al agregar el token:', error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default { apiClient, apiClientArch, apiClientFormData };
