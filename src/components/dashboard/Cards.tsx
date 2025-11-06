import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { CiWarning } from "react-icons/ci";
import supabase from "../../utils/supabase";

const Cards: React.FC = () => {
  const [ventasTotal, setVentasTotal] = useState<number>(0);
  const [clientesTotal, setClientesTotal] = useState<number>(0);
  const [productosStockDeficit, setProductosStockDeficit] = useState<number>(0);

  useEffect(() => {
    const loadData = async () => {
      const { data, error } = await supabase.from("ventas").select("total");
      const { data: dataClient, error: errorC } = await supabase
        .from("clientes")
        .select("*");
      const { data: dataPro, error: errorPro } = await supabase
        .from("productos")
        .select("*");

      if (error || errorC || errorPro) {
        console.error(error);
      } else {
        const sumaVentas =
          data?.reduce((acc, venta) => acc + (venta.total || 0), 0) ?? 0;
        setVentasTotal(sumaVentas);
        setClientesTotal(dataClient.length);
        const deficitCount =
          dataPro?.filter((prod) => (prod.stock ?? 0) < 15).length ?? 0;
        setProductosStockDeficit(deficitCount);
      }
    };
    loadData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-600 font-medium">Ventas Totales</h3>
          <HiMiniArrowTrendingUp className="text-indigo-600 text-3xl" />
        </div>
        <p className="text-2xl font-semibold text-indigo-700">${ventasTotal}</p>
        <div className="mt-3 text-sm text-gray-500">
          +12% respecto al año anterior
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-600 font-medium">Clientes</h3>
          <FaUsers className="text-indigo-600 text-3xl" />
        </div>
        <p className="text-2xl font-semibold text-indigo-700">
          {clientesTotal}
        </p>
        <div className="mt-3 text-sm text-gray-500">+1 nuevo este mes</div>
      </div>

      {/* Card 3 */}
      <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-600 font-medium">
            Productos con Stock Bajo
          </h3>
          <CiWarning className="text-yellow-500 text-3xl" />
        </div>
        <p className="text-2xl font-semibold text-indigo-700">{productosStockDeficit}</p>
        <div className="mt-3 text-sm text-gray-500">
          Revisa el inventario para evitar faltantes
        </div>
      </div>
    </div>
  );
};

export default Cards;
