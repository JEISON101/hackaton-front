import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const Charts: React.FC = () => {
  // 📊 Datos simulados
  const ventasMensuales = [
    { mes: "Ene", ventas: 12000 },
    { mes: "Feb", ventas: 18000 },
    { mes: "Mar", ventas: 15000 },
    { mes: "Abr", ventas: 22000 },
    { mes: "May", ventas: 27000 },
    { mes: "Jun", ventas: 30000 },
  ];

  const ventasPorProducto = [
    { producto: "Camisas", cantidad: 1200 },
    { producto: "Pantalones", cantidad: 950 },
    { producto: "Zapatillas", cantidad: 1800 },
    { producto: "Gorras", cantidad: 650 },
    { producto: "Accesorios", cantidad: 500 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      {/* 📈 Ventas Mensuales */}
      <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-indigo-700 mb-4">
          Ventas Mensuales
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={ventasMensuales}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="mes" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
              }}
            />
            <Line
              type="monotone"
              dataKey="ventas"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ r: 5, fill: "#818CF8" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 📊 Ventas por Producto */}
      <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-indigo-700 mb-4">
          Ventas por Producto
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ventasPorProducto}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="producto" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
              }}
            />
            <Legend />
            <Bar
              dataKey="cantidad"
              fill="url(#colorGradient)"
              radius={[10, 10, 0, 0]}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#A78BFA" stopOpacity={0.6} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
