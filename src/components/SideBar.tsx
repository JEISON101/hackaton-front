import type { JSX } from "react";
import { BsBoxSeam, BsBuildings } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { PiStorefrontLight, PiUsersThree } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

type PropsSideBar = {
  cerrado: boolean;
  setCerrado: (value: boolean) => void;
};

interface RouteItem {
  path: string;
  label: string;
  icon: JSX.Element;
}

const SideBar: React.FC<PropsSideBar> = ({ cerrado, setCerrado }) => {
  const navigate = useNavigate();

  const adminRoutes: RouteItem[] = [
    { path: "/dashboard", label: "Dashboard", icon: <LuLayoutDashboard /> },
    { path: "/productos", label: "Productos", icon: <BsBoxSeam /> },
    { path: "/clientes", label: "Clientes", icon: <FiUsers /> },
    { path: "/users", label: "Usuarios", icon: <PiUsersThree /> },
    { path: "/ventas", label: "Ventas", icon: <PiStorefrontLight /> },
    { path: "/sucursales", label: "Sucursales", icon: <BsBuildings /> },
  ];

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("user");
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen 
      bg-white/80 backdrop-blur-lg shadow-xl
      border-r border-gray-200 flex flex-col
      transition-all duration-300 ${cerrado ? "w-20" : "w-60"}`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <button
          onClick={() => setCerrado(!cerrado)}
          className="p-2 rounded-lg hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 transition"
        >
          <FaBars className="text-xl" />
        </button>
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="flex flex-col justify-between flex-1">
        {/* MENÚ PRINCIPAL */}
        <nav className="flex-1 px-2 py-6 space-y-1 overflow-y-auto text-gray-700">
          {adminRoutes.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-cyan-50 hover:text-indigo-700 transition-all duration-200"
            >
              <span className="text-xl text-indigo-500">{icon}</span>
              {!cerrado && <span className="text-sm font-medium">{label}</span>}
            </Link>
          ))}
        </nav>
        {/* SECCIÓN INFERIOR */}
        <div className="border-t border-gray-200">
          {/* INFO USUARIO */}
          {!cerrado && (
            <div className="px-6 py-4 text-center">
              <h2 className="text-lg font-semibold text-indigo-700">
                Administrador
              </h2>
              <p className="text-sm text-gray-500">Panel de control</p>
            </div>
          )}

          {/* LOGOUT */}
          <div
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-3 cursor-pointer text-gray-600 hover:bg-red-50 hover:text-red-500 transition-all rounded-lg mx-2 mb-3"
          >
            <LuLogOut className="text-xl" />
            {!cerrado && (
              <span className="text-sm font-medium">Cerrar Sesión</span>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
