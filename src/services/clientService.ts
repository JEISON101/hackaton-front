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

    return (data || []).map((client) => {
      let usuarios = { nombres: "", apellidos: "" };

      if (Array.isArray(client.usuarios) && client.usuarios.length > 0) {
        const firstUser = client.usuarios[0] as {
          nombres: string;
          apellidos: string;
        };
        usuarios = {
          nombres: firstUser.nombres || "",
          apellidos: firstUser.apellidos || "",
        };
      } else if (
        client.usuarios &&
        typeof client.usuarios === "object" &&
        !Array.isArray(client.usuarios)
      ) {
        const singleUser = client.usuarios as {
          nombres: string;
          apellidos: string;
        };
        usuarios = {
          nombres: singleUser.nombres || "",
          apellidos: singleUser.apellidos || "",
        };
      }

      return {
        id: client.id,
        idusuario: client.idusuario,
        usuarios,
      };
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return [];
  }
};
