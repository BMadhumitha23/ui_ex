import React from "react";
import "./Message.css";  // Ensure you have the CSS for animations

const Message = ({ winner, message }) => (
  <div className={`message ${winner ? "winner" : "default"}`}>
    {winner ? "Congratulations! You won!" : message}
  </div>
);

export default Message;
