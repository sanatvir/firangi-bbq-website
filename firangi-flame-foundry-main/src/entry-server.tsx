import React from "react";
import ReactDOMServer from "react-dom/server";
import { RouterProvider } from "@tanstack/react-router";
import { createRouter } from "./router";

export default async function handleRequest(request: Request) {
  const router = createRouter();

  // Synchronize router state to the incoming URL path
  const url = new URL(request.url);
  await router.load();

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
}