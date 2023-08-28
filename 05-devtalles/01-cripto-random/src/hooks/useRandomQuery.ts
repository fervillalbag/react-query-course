import { useQuery } from "@tanstack/react-query";

const getRandomNumberFromAPI = async (): Promise<number> => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  const numberString = await res.json();
  return numberString;
};

export const useRandomQuery = () => {
  return useQuery(["randomUser"], getRandomNumberFromAPI);
};
