import supabase from "../utils/supabase";

export const getSales = async () => {
  try {
    const { data, error } = await supabase.from("ventas").select(`
        id,
        total,
        created_at,
        clientes:clientes (id, usuarios:usuarios (nombres, apellidos)),
        empleados:empleados (id, usuarios:usuarios (nombres, apellidos)),
        detalleventas (
          id, idproducto, cantidadproducto, subtotal, fecha
        )
      `);

    if (error) {
      console.error("Error fetching sales:", error);
      return [];
    }

    return (data || []).map((sale) => {
      const clientes =
        Array.isArray(sale.clientes) && sale.clientes.length > 0
          ? sale.clientes[0].usuarios &&
            Array.isArray(sale.clientes[0].usuarios) &&
            sale.clientes[0].usuarios.length > 0
            ? {
                nombres: sale.clientes[0].usuarios[0].nombres || "Sin nombre",
                apellidos:
                  sale.clientes[0].usuarios[0].apellidos || "Sin apellido",
              }
            : null
          : null;

      const empleados =
        Array.isArray(sale.empleados) && sale.empleados.length > 0
          ? sale.empleados[0].usuarios &&
            Array.isArray(sale.empleados[0].usuarios) &&
            sale.empleados[0].usuarios.length > 0
            ? {
                nombres: sale.empleados[0].usuarios[0].nombres || "Sin nombre",
                apellidos:
                  sale.empleados[0].usuarios[0].apellidos || "Sin apellido",
              }
            : null
          : null;

      return {
        id: sale.id,
        total: sale.total,
        created_at: sale.created_at,
        clientes,
        empleados,
        detalleventas: sale.detalleventas || [],
      };
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return [];
  }
};
