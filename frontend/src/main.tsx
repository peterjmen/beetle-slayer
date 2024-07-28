import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme.ts";
import { CombatLogProvider } from "./Contexts/CombatLog/CombatLogContext.tsx";
import Layout from "./components/Layout/Layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CombatLogProvider>
        <Layout>
          <App />
        </Layout>
      </CombatLogProvider>
    </ChakraProvider>
  </React.StrictMode>
);
