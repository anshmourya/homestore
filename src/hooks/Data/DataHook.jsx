import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("product")) || []
  );

  const getAllData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProduct(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };
  const getSingleProduct = async (id) => {
    const response = await axios.get(`https://dummyjson.com/product/${id}`);
    return response.data;
  };
  useEffect(() => {
    console.log(product);
    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);

  return (
    <DataContext.Provider value={{ product, getAllData, getSingleProduct }}>
      {children}
    </DataContext.Provider>
  );
};
