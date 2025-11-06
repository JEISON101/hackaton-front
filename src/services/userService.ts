import supabase from "../utils/supabase";

export const getUsers = async () => {
  try {
    const { data, error } = await supabase
      .from("usuarios")
      .select(
        "id, idrol, nombres, apellidos, documento, email, fechanacimiento, genero, tipodocumento"
      );

    if (error) {
      console.error("Error fetching users:", error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error("Unexpected error:", err);
    return [];
  }
};
