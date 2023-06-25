import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./hooks/Data/DataHook.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* adding DataContext Api to get all the list of the product */}
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
