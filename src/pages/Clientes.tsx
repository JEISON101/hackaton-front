import ClientTable from "../components/ClientTable";

const Clientes = () => {
  return (
    <div className="bg-gray-50 text-black min-h-screen p-6">
      <h1 className="text-2xl text-black font-bold mb-6">Clientes</h1>
      <section className="mb-6">
        <ClientTable />
      </section>
    </div>
  );
};

export default Clientes;
