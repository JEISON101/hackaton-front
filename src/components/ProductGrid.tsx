import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";
import { getProducts } from "../services/productService";

interface Product {
  id: number;
  idcategoria: number;
  nombre: string;
  descripcion: string;
  precioventa: number;
  talla: string;
  segmento: string;
  stock: number;
  fotos: { url: string }[];
}

interface Category {
  id: number;
  nombre: string;
}

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    {product.fotos.length > 0 && (
      <img
        src={product.fotos[0].url}
        alt={product.nombre}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
    )}
    <h2 className="text-lg font-bold mb-2 text-gray-800">{product.nombre}</h2>
    <p className="text-sm text-gray-600 mb-2">{product.descripcion}</p>
    <div className="flex justify-between items-center">
      <p className="text-sm text-gray-800 font-semibold">
        Precio: ${product.precioventa}
      </p>
      <p
        className={`text-xs font-bold px-2 py-1 rounded-full ${
          product.stock > 20
            ? "bg-green-100 text-green-800"
            : product.stock > 0
            ? "bg-yellow-100 text-yellow-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {product.stock > 20
          ? "Disponible"
          : product.stock > 0
          ? "Stock bajo"
          : "Crítico"}
      </p>
    </div>
  </div>
);

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };

    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    fetchCategories();
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.idcategoria === selectedCategory
      : true;
    const matchesSearch = product.nombre
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 text-black min-h-screen p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Gestión de Productos
        </h1>
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Buscar por nombre"
            className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            id="category"
            className="ml-3 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            value={selectedCategory || ""}
            onChange={(e) =>
              setSelectedCategory(Number(e.target.value) || null)
            }
          >
            <option value="">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.nombre.charAt(0).toUpperCase() +
                  category.nombre.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
