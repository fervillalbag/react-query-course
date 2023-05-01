import axios from "axios";

const axiosPackage = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getCharacters = async () => {
  const response = await axiosPackage.get("/character");
  return response;
};
