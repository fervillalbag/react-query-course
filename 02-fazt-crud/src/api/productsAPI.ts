import axios from "axios";

const productsAPI = axios.create({
  url: "https://gv3yvw-3000.preview.csb.app",
});

export const getProducts = async () => {
  const res = await productsAPI.get("/products");
  return res.data;
};
