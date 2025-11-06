import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createChat({
  webhookUrl:
    "https://macarron01.app.n8n.cloud/webhook/e8156249-8860-4140-9880-1b61133b60d4/chat",
  mode: "window",
  target: "#n8n-chat",
  showWelcomeScreen: true,
  initialMessages: ["¡Hola! 👋", "Soy BlessDBot. ¿Cómo puedo ayudarte hoy?"],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <div id="n8n-chat"></div>
  </StrictMode>
);
