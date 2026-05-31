import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { createRouter } from "./router";

const router = createRouter();

const rootElement = document.getElementById("root");

if (rootElement) {
  // If the server pre-rendered HTML, hydrate it. Otherwise, render normally.
  if (rootElement.innerHTML) {
    ReactDOM.hydrateRoot(
      rootElement,
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  } else {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  }
}