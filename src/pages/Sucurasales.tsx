import { useEffect, useState } from "react";
import { getSucursalesService } from "../services/sucursalesService";
import { FiMapPin, FiHome } from "react-icons/fi";

interface Sucursal {
  id: number;
  nombre: string;
  direccion: string | null;
  ciudad: string | null;
  createdAt: string | Date | null;
  updatedAt: string | Date | null;
}

const Sucursales = () => {
  const [sucursales, setSucursales] = useState<Sucursal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSucursales = async () => {
      try {
        const res = await getSucursalesService();
        setSucursales(res.data);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    getSucursales();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-gray-600 text-lg">Cargando sucursales...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Sucursales
      </h1>

      {sucursales.length === 0 ? (
        <p className="text-center text-gray-500">No hay sucursales registradas.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sucursales.map((sucursal) => (
            <div
              key={sucursal.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-40 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
                  alt="Sucursal"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FiHome className="text-indigo-600" />
                  {sucursal.nombre}
                </h2>

                <p className="text-gray-600 mt-2 flex items-center gap-2">
                  <FiMapPin className="text-indigo-500" />
                  {sucursal.ciudad || "Ciudad desconocida"}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {sucursal.direccion || "Sin dirección registrada"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sucursales;
