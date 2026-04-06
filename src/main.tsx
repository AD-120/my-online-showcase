import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// When a new deployment is published, old JS chunk filenames change.
// This reloads the page automatically so the user gets the fresh version
// instead of seeing a blank/error screen.
window.addEventListener("vite:preloadError", () => {
  window.location.reload();
});

createRoot(document.getElementById("root")!).render(<App />);
