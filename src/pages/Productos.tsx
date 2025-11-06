import ProductGrid from "../components/ProductGrid";

const Productos = () => {
  return (
    <div className="bg-gray-50 text-black min-h-screen p-6">
      <h1 className="text-2xl text-black font-bold mb-6">Productos</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Lista de Productos</h2>
        <ProductGrid />
      </section>
    </div>
  );
};

export default Productos;
