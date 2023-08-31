import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { router } from "./router";

//! Remover enable css source maps
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
