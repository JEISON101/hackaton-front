import { useForm } from "react-hook-form"
import { FaBagShopping, FaLock, FaEnvelope } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const AuthPage = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const loguear = (data: any) => {
    console.log("Login:", data)
    navigate('/dashboard')
  }

  return (
    <div className="max-w-md w-full">
      {/* Card principal */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/30 transition-all duration-300">
        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
          <div className="p-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-md">
            <FaBagShopping className="text-3xl" />
          </div>
        </div>

        {/* Títulos */}
        <h2 className="text-3xl font-ligth text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
          Iniciar Sesión
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Ingresa tus credenciales para acceder al sistema
        </p>

        {/* Formulario */}
        <form onSubmit={handleSubmit(loguear)} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400 text-lg" />
              <input
                {...register("email", {required:true})}
                type="email"
                placeholder="usuario@empresa.com"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400 text-lg" />
              <input
                {...register("password",{required:true})}
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-gray-400"
              />
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-white font-medium bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default AuthPage
