import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://task-api-eight-flax.vercel.app/api/products",
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Product fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const fetchProductDetails = async (id) => {
    try {
      const response = await axios.get(
        `https://task-api-eight-flax.vercel.app/api/products/${id}`,
      );
      setSelectedProduct(response.data);
    } catch (error) {
      console.error("Detail fetch error:", error);
    }
  };

  if (loading)
    return <div className="p-10 text-center">Loading Products...</div>;

  return (
    <div className="p-8 bg-[#F4F4F4] min-h-screen">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1D1F]">
            Product Inventory
          </h1>
          <p className="text-[#6F767E]">
            Manage your subscriptions and add-on features
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-gray-200 px-4 py-2 rounded-xl font-bold text-[#1A1D1F]">
            Filter
          </button>
          <button className="bg-[#1A1D1F] text-white px-4 py-2 rounded-xl font-bold">
            Add Product
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-[#F4F4F4] rounded-2xl mb-4 flex items-center justify-center group-hover:bg-[#29BA6A]/10 transition-colors">
              <span className="text-xl">📦</span>
            </div>
            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9FA5] bg-gray-100 px-2 py-1 rounded-md">
                {product.category}
              </span>
              <h3 className="text-lg font-bold text-[#1A1D1F] mt-2">
                {product.name}
              </h3>
              <p className="text-2xl font-bold text-[#29BA6A] mt-1">
                ${product.price}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <span className="text-sm text-[#6F767E] font-medium">
                {product.sales} Sales
              </span>
              <button
                onClick={() => fetchProductDetails(product.id)}
                className="text-sm font-bold text-[#1A1D1F] hover:underline"
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- PRODUCT DETAIL MODAL --- */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-[40px] p-10 max-w-lg w-full shadow-2xl relative animate-in zoom-in duration-200">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            <div className="flex gap-6 items-start mb-8">
              <div className="w-20 h-20 bg-[#29BA6A] rounded-3xl flex items-center justify-center text-3xl shadow-lg shadow-green-100">
                🚀
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1A1D1F]">
                  {selectedProduct.name}
                </h2>
                <p className="text-[#29BA6A] font-bold text-xl">
                  ${selectedProduct.price}
                </p>
              </div>
            </div>

            <div className="space-y-4 bg-[#F8F9FA] p-6 rounded-3xl border border-gray-100">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-[#6F767E]">Product ID</span>
                <span className="font-bold text-[#1A1D1F]">
                  #{selectedProduct.id}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-[#6F767E]">Category</span>
                <span className="font-bold text-[#1A1D1F] capitalize">
                  {selectedProduct.category}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6F767E]">Total Performance</span>
                <span className="font-bold text-[#29BA6A]">
                  {selectedProduct.sales} units sold
                </span>
              </div>
            </div>

            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-8 w-full bg-[#1A1D1F] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all"
            >
              Got it, Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
