import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsAPI";

export const Products: React.FC = () => {
  const { data } = useQuery(["products"], getProducts);
  console.log(data);

  return <div>hello world products</div>;
};
