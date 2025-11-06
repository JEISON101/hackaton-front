import React from "react";
import AuthPage from "../components/landing/AuthPage";
import Info from "../components/landing/Info";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 px-6 py-10">
      <div className="max-w-md w-full mb-10 md:mb-0 md:mr-16">
        <Info />
      </div>
      <div>
        <AuthPage />
      </div>
    </div>
  );
};

export default Landing;
