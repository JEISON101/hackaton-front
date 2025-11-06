import React from "react";
import AuthPage from "../components/landing/AuthPage";
import Info from "../components/landing/Info";

const Landing: React.FC = () => {
  return (
    <div
      className="
        min-h-screen w-screen flex flex-col md:flex-row items-center justify-center
        px-6 py-10
        bg-gradient-to-br from-white via-blue-50 to-indigo-100
        relative
      "
    >
      {/* Imagen de fondo pequeña, centrada y sin repetición */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            w-32 h-32
            bg-[url('https://images.jumpseller.com/store/blesscard/store/logo/favicon.png')]
            bg-no-repeat bg-center bg-contain
            opacity-20 mx-auto my-auto
            absolute inset-x-0 inset-y-[30%]
          "
        />
      </div>

      {/* Contenido encima del fondo */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12">
        <div className="max-w-md w-full mb-10 md:mb-0 md:mr-16">
          <Info />
        </div>
        <div className="w-full max-w-md">
          <AuthPage />
        </div>
      </div>
    </div>
  );
};

export default Landing;
