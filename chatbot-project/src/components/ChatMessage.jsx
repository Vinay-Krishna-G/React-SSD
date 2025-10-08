import UserProfileImage from "../assets/profile-1.jpg";
import RobotProfileImage from "../assets/robot.png";
import dayjs from "dayjs";
import "./ChatMessage.css";

function ChatMessage({ message, sender, time }) {
  return (
    <div
      className={
        sender === "robot" ? "chat-message-robot" : "chat-message-user"
      }
    >
      {sender == "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}
        {time && (
          <div className="chat-message-time">{dayjs(time).format("h:mma")}</div>
        )}
      </div>
      {sender == "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
      {console.log(UserProfileImage)}
    </div>
  );
}

export default ChatMessage;
