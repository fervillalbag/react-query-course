import { useQuery } from "@tanstack/react-query";

import { githubApi } from "../api/githubApi";
import { Label } from "../interfaces/label";

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>("/labels");
  return data;
};

export const useLabels = () => {
  const labelQuery = useQuery(["labels"], getLabels, {
    // Esto nos permitira no realizar una consulta
    // nuevamente hasta dentro de una hora
    // staleTime: 1000 * 60 * 60,

    // Esta data se mostrar mientras se cumpla el staleTime
    // es decir si tenemos nuestro stale time durante 1h
    // durante 1h se mostrara este initialData
    // initialData: [
    //   {
    //     id: 196858374,
    //     node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
    //     url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
    //     name: "CLA Signed",
    //     color: "e7e7e7",
    //     default: false,
    //   },
    //   {
    //     id: 1649755876,
    //     node_id: "MDU6TGFiZWwxNjQ5NzU1ODc2",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Fast%20Refresh",
    //     name: "Component: Fast Refresh",
    //     color: "473bcc",
    //     default: false,
    //   },
    // ],

    // Estos datos se pueden mostrar antes de que
    // se termine de hacer la carga de datos desde la API
    placeholderData: [
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
      },
      {
        id: 1649755876,
        node_id: "MDU6TGFiZWwxNjQ5NzU1ODc2",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Fast%20Refresh",
        name: "Component: Fast Refresh",
        color: "473bcc",
        default: false,
      },
    ],
  });

  return labelQuery;
};
