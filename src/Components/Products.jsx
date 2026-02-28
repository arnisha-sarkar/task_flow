import React from "react";

const Products = ({ data }) => {
  return (
    // ✅ Responsive classes:
    // ছোট স্ক্রিনে 'w-full' (পুরো চওড়া),
    // মাঝারি স্ক্রিনে 'md:col-span-x' (যদি গ্রিড কন্টেইনারে ব্যবহার করেন)
    <div className="w-full bg-white p-5 md:p-6 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-5 md:mb-6">
        <h3 className="text-lg font-bold text-gray-900 capitalize">Products</h3>
        <button className="text-xs font-semibold text-gray-500 hover:text-gray-800">
          + New
        </button>
      </div>

      <div className="space-y-4">
        {data?.products?.slice(0, 4).map((product, i) => (
          <div
            key={i}
            // ✅ Responsive padding and flex adjustment
            className="flex items-center gap-3 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
          >
            {/* Product Initials - মোবাইল ভিউতে সাইজ একটু ছোট করা যেতে পারে */}
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                i % 2 === 0
                  ? "bg-blue-50 text-blue-600"
                  : "bg-green-50 text-green-600"
              }`}
            >
              {product.code || product.name.substring(0, 2).toUpperCase()}
            </div>

            {/* Product Name & Category - মোবাইল ভিউতে টেক্সট ট্রাঙ্কেট করা */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {product.name}
              </p>
              <p className="text-xs text-gray-500 capitalize truncate">
                {product.category}
              </p>
            </div>

            {/* Price & Sales - মোবাইল ভিউতে এলাইনমেন্ট ঠিক রাখা */}
            <div className="text-right shrink-0">
              <p className="text-sm font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-xs text-green-600 font-semibold truncate">
                Sales: {product.sales}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
