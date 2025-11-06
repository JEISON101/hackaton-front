import { Link, useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaUserMd,
  FaMoneyBill,
  FaClipboardList,
  FaCalendarAlt,
  FaBriefcaseMedical,
  FaHome,
  FaBars,
} from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useAuthContext } from "../context/AuthContext";
import type { JSX } from "react";

const ICONO = "https://www.shutterstock.com/image-vector/mens-tshirt-hanger-logo-design-600w-2610960209.jpg";
// Tipo de dato para las rutas
interface RouteItem {
  path: string;
  label: string;
  icon: JSX.Element;
  roles: string[];
}

type PropsSideBar = {
  cerrado: boolean;
  setCerrado: (value: boolean) => void;
};

const SideBar: React.FC<PropsSideBar> = ({ cerrado, setCerrado }) => {
  const navigate = useNavigate();
  const {user, setUser} = useAuthContext();

  // Todas las rutas con roles
  const routes: RouteItem[] = [
    // ADMINISTRADOR
    { path: "/dashboard", label: "Dashboard", icon: <FaHome />, roles: ["Administrador"] },
    { path: "/clientes", label: "Clientes", icon: <FaUsers />, roles: ["Administrador"] },
    { path: "/empleados", label: "Empleados", icon: <FaUserMd />, roles: ["Administrador"] },
    { path: "/ventas", label: "Ventas", icon: <FaMoneyBill />, roles: ["Administrador"] },
    { path: "/productos", label: "Productos", icon: <FaClipboardList />, roles: ["Administrador"] },
    { path: "/sucursales", label: "Sucursales", icon: <FaClipboardList />, roles: ["Administrador"] },

    // EMPLEADO
    { path: "/clientes", label: "Clientes", icon: <FaHome />, roles: ["Empleado"] },
    { path: "/ventas", label: "Ventas", icon: <FaCalendarAlt />, roles: ["Empleado"] },

    // CLIENTE
   { path: "/productos", label: "Productos", icon: <FaHome />, roles: ["Cliente"] },
   { path: "/compras", label: "Compras", icon: <FaBriefcaseMedical />, roles: ["Cliente"] },
  ];

  // Filtrar rutas según el rol actual del usuario
  const filteredRoutes = routes.filter((route) => {
    const rolActual = (user.rol || "")
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return route.roles.some(
      (r) =>
        r
          .toLowerCase()
          .trim()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") === rolActual
    );
  });

  // Cerrar sesión
  const handleLogout = () => {
    navigate("/");
    setUser({ id: null, documento: null, rol: null, nombres: null, apellidos: null, email:null, fechaNacimiento: null });
    localStorage.removeItem("user");
  };

  return (
    <aside
      className={`fixed top-0 left-6 h-screen bg-blue-50 text-gray-600 flex flex-col transition-all duration-300 ${
        cerrado ? "w-20" : "w-48"
      }`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
        <button
          onClick={() => setCerrado(!cerrado)}
          className="p-2 rounded-lg hover:bg-blue-200 transition"
        >
          <FaBars />
        </button>
        {!cerrado && <img src={ICONO} alt="Logo" className="px-4" />}
      </div>

      {/* INFO DEL USUARIO */}
      {!cerrado && (
        <div className="px-6 py-3 border-b border-gray-300 text-center">
          <h2 className="text-xl font-bold text-blue-600">
            {user?.nombres ? user.apellidos : "Usuario"}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {user.rol ? user.rol : "Sin rol"}
          </p>
        </div>
      )}

      {/* MENÚ DE RUTAS */}
      <nav className="flex-1 px-2 py-6 space-y-2 overflow-y-auto">
        {filteredRoutes.map(({ path, label, icon }) => (
          <Link
            key={path}
            to={path}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-200 transition"
          >
            <span className="text-lg">{icon}</span>
            {!cerrado && <span>{label}</span>}
          </Link>
        ))}

        {/* LOGOUT */}
        <div
          className="flex items-center gap-3 px-3 py-2 mt-2 rounded-lg hover:bg-blue-200 cursor-pointer transition"
          onClick={handleLogout}
        >
          <LuLogOut className="text-lg" />
          {!cerrado && <span>Cerrar Sesión</span>}
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;