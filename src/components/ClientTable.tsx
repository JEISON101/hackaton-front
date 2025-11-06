import { useEffect, useState } from "react";
import { getClients } from "../services/clientService";

interface Client {
  id: number;
  idusuario: number;
  usuarios: {
    nombres: string;
    apellidos: string;
  };
}

const ClientTable = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      const clients = await getClients();
      setClients(clients);
    };

    fetchClients();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">Apellido</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="px-4 py-2 border">{client.id}</td>
              <td className="px-4 py-2 border">
                {client.usuarios.nombres || "Sin nombre"}
              </td>
              <td className="px-4 py-2 border">
                {client.usuarios.apellidos || "Sin apellido"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
