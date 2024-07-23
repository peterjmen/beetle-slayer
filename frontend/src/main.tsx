import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout.tsx";
import theme from "./theme/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Layout>
        <App />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
);
