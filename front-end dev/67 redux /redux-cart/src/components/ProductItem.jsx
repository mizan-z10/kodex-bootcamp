import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, removeFromCart } from "../features/cartSlice";
import { useLocation } from "react-router";

const ProductItem = ({ product, quantity }) => {
  const dispatch = useDispatch();
  let path = useLocation();

  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
      {/* Product Image */}
      <div className="h-64 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full max-h-60 object-contain"
        />
      </div>

      {/* Category */}
      <p className="text-sm text-gray-500 capitalize mb-2">
        {product.category}
      </p>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
        {product.title}
      </h2>

      {/* Price */}
      <p className="text-xl font-bold text-green-600 mt-3">${product.price}</p>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
        {product.description}
      </p>

      {/* Add to Cart */}
      {path.pathname === "/cart" ? (
        <div>
          <div className="flex items-center justify-between mt-4 bg-gray-200 py-2 px-4 rounded-lg">
          <p  onClick={() => {dispatch(decreaseQuantity(product))}} className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition cursor-pointer select-none" >-</p>
          <p>Quantity : {quantity}</p>
          <p  onClick={() => {dispatch(addToCart(product))}} className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition cursor-pointer select-none" >+</p>
        </div>
          <button
            onClick={() => {
              dispatch(removeFromCart(product.id));
            }}
            className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            REmove From Cart
          </button>
        </div>
      ) : (
        quantity ? <div className="flex items-center justify-between mt-4 bg-gray-200 py-2 px-4 rounded-lg">
          <p  onClick={() => {dispatch(decreaseQuantity(product))}} className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition cursor-pointer select-none" >-</p>
          <p>Quantity : {quantity}</p>
          <p  onClick={() => {dispatch(addToCart(product))}} className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition cursor-pointer select-none" >+</p>
        </div> : <button
          onClick={() => {
            dispatch(addToCart(product));
            alert("Product added to cart!");
          }}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
