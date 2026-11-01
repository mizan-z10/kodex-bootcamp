
import axios from "axios";

export const fetchProducts = async ({ pageParam = 1 }) => {
  try {
    const limit = 20;
    const skip = (pageParam - 1) * limit;

    const res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );

    return res.data;
  } catch (error) {
    console.error(
      "Error in product API:",
      error.response?.data || error.message
    );

    throw error;
  }
};
