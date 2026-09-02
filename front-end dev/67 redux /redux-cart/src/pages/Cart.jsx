import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

const Cart = () => {
  const { cartItem } = useSelector((store) => store.cart);

  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
    {cartItem.map((elem) => {
      return <ProductItem product={elem} key={elem.id} quantity={elem.quantity} />
    })}
     </div>;
};

export default Cart;
