import { useEffect, useState } from "react";
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

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Nombres</th>
            <th className="px-4 py-2 border">Apellidos</th>
            <th className="px-4 py-2 border">Documento</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Fecha de Nacimiento</th>
            <th className="px-4 py-2 border">Género</th>
            <th className="px-4 py-2 border">Tipo de Documento</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border">{user.id}</td>
            
              <td className="px-4 py-2 border">{user.nombres}</td>
              <td className="px-4 py-2 border">{user.apellidos}</td>
              <td className="px-4 py-2 border">{user.documento}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.fechanacimiento}</td>
              <td className="px-4 py-2 border">{user.genero}</td>
              <td className="px-4 py-2 border">{user.tipodocumento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
