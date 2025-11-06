import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import Productos from "./pages/Productos";
import Sucurasales from "./pages/Sucurasales";
import Clientes from "./pages/Clientes";
import Ventas from "./pages/Ventas";
import RenderVistas from "./components/RenderVistas";
import RutaPrivada from "./components/RutaPrivada";
import Compras from "./pages/Compras";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route element={<RutaPrivada />}>
            <Route element={<RenderVistas />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/sucursales" element={<Sucurasales />} />
              <Route path="/clientes" element={<Clientes />} />
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
