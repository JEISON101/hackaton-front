import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RenderVistas from "./components/RenderVistas";
import RutaPrivada from "./components/RutaPrivada";
import Clientes from "./pages/Clientes";
import Compras from "./pages/Compras";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Productos from "./pages/Productos";
import Sucurasales from "./pages/Sucurasales";
import Usuarios from "./pages/Usuarios";
import Ventas from "./pages/Ventas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<RutaPrivada />}>
            <Route element={<RenderVistas />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/sucursales" element={<Sucurasales />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/users" element={<Usuarios />} />
              <Route path="/ventas" element={<Ventas />} />
              <Route path="/compras" element={<Compras />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
