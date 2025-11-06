import axios from "axios";

const BASE_URL = import.meta.env.VITE_URL_BACK
const prefix = 'api/v1/sucursales'

export const getSucursalesService = async() => {
  try {
    const sucursales = await axios.get(`${BASE_URL}/${prefix}/read`)
    return sucursales.data;
  } catch (error) {
    throw error;
  }
}