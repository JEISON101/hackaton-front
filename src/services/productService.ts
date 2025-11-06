import supabase from "../utils/supabase";

export const getProducts = async () => {
  try {
    const { data, error } = await supabase
      .from("productos")
      .select(
        "id, idcategoria, nombre, descripcion, precioventa, preciocompra, talla, segmento, stock, fotos (url)"
      );

    if (error) {
      console.error("Error fetching products:", error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error("Unexpected error:", err);
    return [];
  }
};
