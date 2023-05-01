import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

import App from "./App.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </QueryClientProvider>
);
