import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./fonts.css"
import "./index.css"
import App from "./App"

// Theme preset (src/index.css): default | neutral | warm | ocean | forest | violet
document.documentElement.dataset.theme = "neutral"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
