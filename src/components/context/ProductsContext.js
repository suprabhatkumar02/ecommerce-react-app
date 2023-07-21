import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ProductsReducer } from "../reducers/ProductsReducer";

const PRODUCTS_URL = `https://dummyjson.com/products`;
const ProductsContext = createContext();

const initialState = {
  loading: null,
  error: null,
  productsList: null,
};
export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const response = await fetch(PRODUCTS_URL);
        if (!response.ok) {
          throw new Error(`error while fetching data`);
        }
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", payload: error });
      }
    };
    fetchProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
