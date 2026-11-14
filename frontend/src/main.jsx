import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode> /* StrictMode es una herramienta para destacar problemas potenciales en la aplicación. No renderiza nada en la interfaz de usuario. */
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);