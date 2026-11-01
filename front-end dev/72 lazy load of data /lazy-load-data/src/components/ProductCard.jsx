
import React from "react";

const ProductCard = ({ elem }) => {
    
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-56 items-center justify-center bg-gray-50 p-5">
        <img
          src={elem.images[0]}
          alt={elem.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {elem.category}
        </p>

        <h2 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900">
          {elem.title}
        </h2>

        <p className="mb-4 line-clamp-2 text-sm text-gray-500">
          {elem.description}
        </p>

        <div className="mb-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${elem.price.toFixed(2)}
          </span>

          <span className="rounded-lg bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-700">
            ★ {elem.rating}
          </span>
        </div>

        <button className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
