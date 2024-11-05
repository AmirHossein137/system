import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProviderApp from "./app/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProviderApp>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderApp>
  </StrictMode>
);
