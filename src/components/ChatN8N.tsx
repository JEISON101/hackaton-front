import React, { useEffect } from "react";
import { createChat } from "@n8n/chat";

const ChatN8N: React.FC = () => {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://macarron01.app.n8n.cloud/webhook/e8156249-8860-4140-9880-1b61133b60d4/chat",
      mode: "window",
      target: "#n8n-chat",
      showWelcomeScreen: true,
      initialMessages: [
        "¡Hola! 👋",
        "Soy BlessDBot. ¿Cómo puedo ayudarte hoy?",
      ],
    });

    return () => {
      const container = document.getElementById("n8n-chat");
      if (container) container.innerHTML = ""; // elimina el contenido
    };
  }, []);

  return <div id="n8n-chat"></div>;
};

export default ChatN8N;
