import UserTable from "../components/UserTable";

const Usuarios = () => {
  return (
    <div className="bg-gray-50 text-black min-h-screen p-6">
      <h1 className="text-2xl text-black font-bold mb-6">Usuarios</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Lista de Usuarios</h2>
        <UserTable />
      </section>
    </div>
  );
};

export default Usuarios;
