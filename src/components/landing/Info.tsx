import React, { type JSX } from "react";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { BsBoxSeam, BsGraphUpArrow } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";

const Info: React.FC = () => {
  return (
    <div className="max-w-lg">
      {/* Título principal */}
      <h1 className="text-4xl font-extraligth text-gray-800 mb-2">
        Sistema Profesional de Gestión BLESSCARD
      </h1>
      <h2 className="text-lg text-indigo-600 font-medium mb-4">
        Gestiona tu tienda de forma
        <p className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
          inteligente
        </p>
      </h2>
      <p className="text-gray-600 mb-10 leading-relaxed">
        Plataforma integral para administrar inventario, ventas, clientes y
        sucursales. Todo lo que necesitas en un solo lugar.
      </p>

      {/* Features */}
      <div className="space-y-6">
        <Feature
          icon={<HiMiniArrowTrendingUp className="text-indigo-600 text-3xl" />}
          title="Dashboard Inteligente"
          desc="Visualiza métricas y KPIs en tiempo real"
        />
        <Feature
          icon={<BsBoxSeam className="text-indigo-600 text-3xl" />}
          title="Gestión de Inventario"
          desc="Control completo de stock y alertas automáticas"
        />
        <Feature
          icon={<FaUsers className="text-indigo-600 text-3xl" />}
          title="CRM de Clientes"
          desc="Administra tu base de clientes eficientemente"
        />
        <Feature
          icon={<BsGraphUpArrow className="text-indigo-600 text-3xl" />}
          title="Reportes Avanzados"
          desc="Analíticas detalladas de ventas y rendimiento"
        />
      </div>
    </div>
  );
};

const Feature = ({
  icon,
  title,
  desc,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-xl">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
);

export default Info;
