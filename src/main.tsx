
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import naveIcon from "./assets/nave_ico.png";

const existingLink = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
const faviconLink = existingLink ?? (document.createElement("link") as HTMLLinkElement);

faviconLink.rel = "icon";
faviconLink.type = "image/png";
faviconLink.href = naveIcon;

if (!existingLink) {
  document.head.appendChild(faviconLink);
}

createRoot(document.getElementById("root")!).render(<App />);
  