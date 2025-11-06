import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";
import { getProducts } from "../services/productService";

interface Product {
  id: number;
  idcategoria: number;
  nombre: string;
  descripcion: string;
  precioventa: number;
  preciocompra: number;
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
  <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
    {product.fotos.length > 0 && (
      <img
        src={product.fotos[0].url}
        alt={product.nombre}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
    )}
    <h2 className="text-lg font-bold mb-2">{product.nombre}</h2>
    <p className="text-sm text-gray-600 mb-2">{product.descripcion}</p>
    <p className="text-sm text-gray-800">
      Precio de venta: ${product.precioventa}
    </p>
    <p className="text-sm text-gray-800">
      Precio de compra: ${product.preciocompra}
    </p>
    <p className="text-sm text-gray-800">Talla: {product.talla}</p>
    <p className="text-sm text-gray-800">Segmento: {product.segmento}</p>
    <p className="text-sm text-gray-800">Stock: {product.stock}</p>
  </div>
);

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

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

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.idcategoria === selectedCategory)
    : products;

  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Filtrar por categoría
        </label>
        <select
          id="category"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          value={selectedCategory || ""}
          onChange={(e) => setSelectedCategory(Number(e.target.value) || null)}
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.nombre}
            </option>
          ))}
        </select>
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
