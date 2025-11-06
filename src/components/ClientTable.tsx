import { useEffect, useState } from "react";
import { getClients } from "../services/clientService";
import { getUsers } from "../services/userService";

interface User {
  id: number;
  nombres: string;
  apellidos: string;
  documento: string;
  email: string;
  fechanacimiento: string;
  genero: string;
  tipodocumento: string;
}

interface Client {
  id: number;
  idusuario: number;
}

const ClientCard = ({ user }: { user: User | undefined }) => (
  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full mb-4">
    <h2 className="text-xl font-bold text-gray-800 mb-2">
      {user ? `${user.nombres} ${user.apellidos}` : "Información no disponible"}
    </h2>
    {user && (
      <>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Documento:</span> {user.tipodocumento}{" "}
          {user.documento}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Fecha de Nacimiento:</span>{" "}
          {user.fechanacimiento}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Género:</span> {user.genero}
        </p>
      </>
    )}
  </div>
);

const ClientTable = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      const clients = await getClients();
      setClients(clients);
    };

    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };

    fetchClients();
    fetchUsers();
  }, []);

  return (
    <div className="w-full">
      {clients.map((client) => (
        <ClientCard
          key={client.id}
          user={users.find((user) => user.id === client.idusuario)}
        />
      ))}
    </div>
  );
};

export default ClientTable;
