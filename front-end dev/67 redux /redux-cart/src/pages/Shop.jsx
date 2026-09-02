import React, { useEffect, useState } from "react";
import axiosInstance from "../config/axiosInstance";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const {cartItem} = useSelector((store) => store.cart);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log("error in api ", error);
      }
    })();
  }, []);



  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">{
    products.map((product) => {

      let quantity = cartItem.find((item) => item.id === product.id)?.quantity || 0;

      return <ProductItem key={product.id} product={product} quantity={quantity} />;
    })
  }</div>;
};

export default Shop;
