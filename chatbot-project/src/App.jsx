import { useEffect, useState } from "react";
import { Chatbot } from "supersimpledev";
import "./App.css";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

function App() {
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );

  useEffect(() => {
    Chatbot.addResponses({
      "can I know your name": "My name is Chat-Bot",
      "where do you live?": "I live on the internet",
      "can you give a random unique id?": () => {
        return `Sure! Here is a random unique id: ${crypto.randomUUID()}`;
      },
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <div>
          <h2 className="welcome">Welcome to Chat-Bot. Ask me anything!</h2>
        </div>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
