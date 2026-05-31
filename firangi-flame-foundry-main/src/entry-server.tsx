// Simple placeholder to satisfy the start-plugin-core path parser
export default function handleServerRequest() {
  return new Response("SSR Placeholder", {
    headers: { "content-type": "text/html" },
  });
}