import axios from "axios";

const BASE_URL = import.meta.env.VITE_URL_BACK;
const prefix = "api/v1/ventas";

export const getAllVentas = async () => {
  try {
    const ventas = await axios.get(`${BASE_URL}/${prefix}/read`);
    return ventas.data;
  } catch (error) {
    throw error;
  }
};

export const getTopProductosMes = async () => {
  try {
    const date = "11";
    const productos = await axios.get(
      `${BASE_URL}/${prefix}/read/top/mes/${date}`
    );
    return productos.data;
  } catch (error) {
    throw error;
  }
};

export const getTopProductosCategoria = async (id: number) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/${prefix}/read/top/categoria/${id}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getTopProductosSucursal = async (id: number) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/${prefix}/read/top/sucursal/${id}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
