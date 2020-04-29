import React, { useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { getProducts } from "../actions";

const ProductSellForm = () => {
  useEffect(() => {
    axiosWithAuth();
    getProducts();
  }, []);

  return <></>;
};

export default ProductSellForm;
