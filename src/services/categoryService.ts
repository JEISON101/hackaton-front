import supabase from "../utils/supabase";

interface Category {
  id: number;
  nombre: string;
}

export const getCategories = async (): Promise<Category[]> => {
  const { data, error } = await supabase
    .from("categorias")
    .select("id, nombre");

  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }

  return (data as Category[]).map((category) => ({
    id: category.id,
    nombre: category.nombre,
  }));
};
