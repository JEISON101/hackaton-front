import { createContext, useContext, useState, type ReactNode } from "react";

type User = {
  id: number | null;
  nombres: string | null;
  apellidos: string | null;
  documento: string | null;
  email: string | null;
  rol: string | null
  fechaNacimiento: string | Date | null;
}

interface Contexto {
  user: User;
  setUser: (user : User) => void;
}

export const authContext = createContext<Contexto | undefined>(undefined);

export const AuthProvider = ({children}:{children: ReactNode}) => {
  const [user, setUser] = useState<User>({
    id: null,
    nombres: null,
    apellidos: null,
    documento: null,
    email: null,
    rol: null,
    fechaNacimiento: null
  })

  return (
    <authContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(authContext);
  
  if (context === undefined) {
    throw new Error('Contexto undefined');
  }
  
  return context;
}