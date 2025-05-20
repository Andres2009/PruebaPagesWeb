import apiClients from './UseIntercept';

const { apiClient } = apiClients;

export const ObtenerProductos = async (data) => {
  try {
    const response = await apiClient.get('');
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
