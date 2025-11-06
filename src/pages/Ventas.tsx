import { useEffect, useState } from "react";
import { getAllVentas, getTopProductosMes } from "../services/ventaService";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import {
  FiCalendar,
  FiPackage,
  FiShoppingBag,
  FiTrendingUp,
} from "react-icons/fi";

export interface Venta {
  id: number;
  idcliente: number;
  idempleado: number;
  total: string;
  createdAt: string;
  updatedAt: string;
  empleado: Empleado;
  cliente: any;
}

export interface Empleado {
  id: number;
  idusuario: number;
  idsucursal: number;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
  usuario: Usuario;
}

export interface Usuario {
  id: number;
  idrol: number;
  nombres: string;
  apellidos: string;
  documento: string;
  password: string;
  email: string;
}

interface TopProductosMes {
  producto: string;
  total: number;
}

const Ventas = () => {
  const [sales, setSales] = useState<Venta[]>([]);
  const [topProductos, setTopProductos] = useState<TopProductosMes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const data = await getAllVentas();
        console.log(data.data);
        setSales(data.data);
        const top = await getTopProductosMes();
        setTopProductos(top.data);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchSales();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-gray-600 text-lg">Cargando datos...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Panel de Ventas
      </h1>

      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FiTrendingUp className="text-indigo-600" />
          Productos más vendidos del mes
        </h2>

        {topProductos.length === 0 ? (
          <p className="text-gray-500">No hay datos disponibles.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topProductos.map((p, i) => (
              <div
                key={i}
                className="flex items-center bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 mr-4">
                  <FiPackage size={48} />
                </div>

                <div>
                  <p className="font-semibold text-gray-800">
                    {i + 1}. {p.producto}
                  </p>
                  <p className="text-sm text-gray-600 text-md">
                    Vendidos: {p.total} unidades
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between items-center my-2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FiShoppingBag className="text-indigo-600" />
          Todas las Ventas
        </h2>

{/*         <button className="flex gap-2 items-center py-2 px-4 text-white bg-green-600 hover:bg-green-700 rounded-lg">
          <MdOutlineShoppingCartCheckout size={24}/>
          Registrar venta
        </button> */}
        </div>

        {sales.length === 0 ? (
          <p className="text-gray-500">No hay ventas registradas.</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-200 bg-white">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-b border-gray-200">
                <tr>
                  <th className="py-4 px-6 font-semibold tracking-wide uppercase text-gray-600 text-xs">
                    Cliente
                  </th>
                  <th className="py-4 px-6 font-semibold tracking-wide uppercase text-gray-600 text-xs">
                    Empleado
                  </th>
                  <th className="py-4 px-6 font-semibold tracking-wide uppercase text-gray-600 text-xs">
                    Total
                  </th>
                  <th className="py-4 px-6 font-semibold tracking-wide uppercase text-gray-600 text-xs flex items-center gap-1">
                    <FiCalendar className="text-indigo-600" /> Fecha
                  </th>
                </tr>
              </thead>

              <tbody>
                {sales.map((v, i) => (
                  <tr
                    key={v.id}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-indigo-50/50 transition`}
                  >
                    <td className="py-4 px-6 font-medium text-gray-800">
                      {v.cliente.usuario.nombres} {v.cliente.usuario.apellidos}
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                      {v.empleado?.usuario.nombres}{" "}
                      {v.empleado?.usuario.apellidos}
                    </td>
                    <td className="py-4 px-6 font-semibold text-indigo-600">
                      ${Number(v.total).toLocaleString()} COP
                    </td>
                    <td className="py-4 px-6 text-gray-500">
                      {new Date(v.createdAt).toISOString().split("T")[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ventas;
