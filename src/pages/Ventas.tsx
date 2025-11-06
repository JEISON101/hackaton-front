import { useEffect, useState } from "react";
import { getSales } from "../services/salesService";

interface Sale {
  id: number;
  total: number;
  created_at: string;
  clientes: { nombres: string; apellidos: string } | null;
  empleados: { nombres: string; apellidos: string } | null;
  detalleventas: {
    id: number;
    idproducto: number;
    cantidadproducto: number;
    subtotal: number;
    fecha: string;
  }[];
}

const Ventas = () => {
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const fetchSales = async () => {
      const data = await getSales();
      setSales(data);
    };

    fetchSales();
  }, []);

  return (
    <div className="bg-gray-50 text-black min-h-screen p-6">
      <h1 className="text-2xl text-black font-bold mb-6">Ventas</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Cliente</th>
            <th className="px-4 py-2 border">Empleado</th>
            <th className="px-4 py-2 border">Total</th>
            <th className="px-4 py-2 border">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td className="px-4 py-2 border">{sale.id}</td>
              <td className="px-4 py-2 border">
                {sale.clientes
                  ? `${sale.clientes.nombres} ${sale.clientes.apellidos}`
                  : "Sin cliente"}
              </td>
              <td className="px-4 py-2 border">
                {sale.empleados
                  ? `${sale.empleados.nombres} ${sale.empleados.apellidos}`
                  : "Sin empleado"}
              </td>
              <td className="px-4 py-2 border">{sale.total}</td>
              <td className="px-4 py-2 border">
                {new Date(sale.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ventas;
