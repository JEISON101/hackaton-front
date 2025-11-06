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

const UserCard = ({ user }: { user: User }) => (
  <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="mb-4">
      <h2 className="text-lg font-bold text-gray-800">
        {user.nombres} {user.apellidos}
      </h2>
      <p className="text-sm text-gray-600">{user.email}</p>
    </div>
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
  </div>
);

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserTable;
