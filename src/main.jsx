import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Component from "./Component.jsx";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App title="Os Perigos do Roubo de Dados na Internet" rodapé="Proteja sua Identidade Digital" />
    <Component />
  </StrictMode>
);
  