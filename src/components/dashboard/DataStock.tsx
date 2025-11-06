import React, { useEffect } from "react";
import { CiWarning } from "react-icons/ci";
import { FaBoxOpen } from "react-icons/fa";
import supabase from "../../utils/supabase";

const DataStock: React.FC = () => {
  useEffect(() => {
  const loadData = async () => {
    const { data, error } = await supabase.from("detalleventas").select(`
      idproducto,
      cantidadproducto,
      subtotal,
      producto:productos(nombre, stock)
    `).order('cantidadproducto', { ascending: false });

    if (error) {
      console.error(error);
    } else {
        console.log(data)
    }
  };
  loadData();
}, []);




  // Datos simulados
  const topVendidos = [
    { nombre: "Camisa Manga Larga", vendidos: 1200 },
    { nombre: "Zapatillas Deportivas", vendidos: 950 },
    { nombre: "Pantalón Jeans", vendidos: 800 },
  ];

  const stockBajo = [
    { nombre: "Gorra Snapback", stock: 5 },
    { nombre: "Cinturón Cuero", stock: 3 },
    { nombre: "Calcetines", stock: 2 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      {/* Top 3 productos más vendidos */}
      <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-indigo-700 mb-4">
          Top 3 Productos Más Vendidos
        </h3>
        <ul className="space-y-3">
          {topVendidos.map((producto, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition"
            >
              <div className="flex items-center gap-3">
                <FaBoxOpen className="text-indigo-500 text-xl" />
                <span className="font-medium text-gray-700">
                  {producto.nombre}
                </span>
              </div>
              <span className="text-gray-600 font-semibold">
                {producto.vendidos}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Productos con stock bajo */}
      <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-indigo-700 mb-4">
          Productos con Stock Bajo
        </h3>
        <ul className="space-y-3">
          {stockBajo.map((producto, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between p-3 rounded-lg bg-red-50 hover:bg-red-100 transition"
            >
              <div className="flex items-center gap-3">
                <CiWarning className="text-red-500 text-xl" />
                <span className="font-medium text-gray-700">
                  {producto.nombre}
                </span>
              </div>
              <span className="text-gray-600 font-semibold">
                {producto.stock}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataStock;
