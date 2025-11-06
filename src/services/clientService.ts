import supabase from "../utils/supabase";

export const getClients = async () => {
  try {
    const { data, error } = await supabase
      .from("clientes")
      .select("id, idusuario, usuarios (nombres, apellidos)");

    if (error) {
      console.error("Error fetching clients:", error);
      return [];
    }

    return (data || []).map((client) => ({
      id: client.id,
      idusuario: client.idusuario,
      usuarios:
        Array.isArray(client.usuarios) && client.usuarios.length > 0
          ? client.usuarios[0]
          : { nombres: "", apellidos: "" },
    }));
  } catch (err) {
    console.error("Unexpected error:", err);
    return [];
  }
};
