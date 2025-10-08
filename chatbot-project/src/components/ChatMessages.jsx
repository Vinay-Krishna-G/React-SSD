import useAutoScroll from "./UseAutoScroll";
import ChatMessage from "./ChatMessage";
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
          time={chatMessage.time}
          key={chatMessage.id}
        />
      ))}
    </div>
  );
}

export default ChatMessages;
