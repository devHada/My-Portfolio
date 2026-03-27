import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Lenis from "lenis";
import { BrowserRouter } from "react-router-dom";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});
console.log(
  "%c Hey developer 👀 — glad you're curious. github.com/devHada",
  "color: #ff4d00; font-size: 14px; font-weight: bold;",
);

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
