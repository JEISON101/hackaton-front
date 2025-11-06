import {useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import ChatN8N from "./ChatN8N";


const RenderVistas: React.FC = () => {
  const [cerrado, setCerrado] = useState<boolean>(false);

  return (
    <div className="flex h-screen bg-blue-50">
      <SideBar cerrado={cerrado} setCerrado={setCerrado} />
      <ChatN8N/>

      <main
        className={`flex-1 bg-blue-50 transition-all duration-300 ${
          cerrado ? "ml-20" : "ml-64"
        }`}
      >
        <Outlet/>
      </main>
    </div>
  );
};

export default RenderVistas;
