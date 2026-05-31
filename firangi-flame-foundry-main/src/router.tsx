import { QueryClient } from "@tanstack/react-query";
import { createRouter as createSharedRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// 1. Create a function named exactly 'createRouter'
export function createRouter() {
  const queryClient = new QueryClient();

  const router = createSharedRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
}

// 2. Register the router types for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}