import React, { useEffect, useState } from "react";

const room_id = process.env.REACT_APP_SD_ROOM_ID;

export default function Output({ drone }) {
  const [messages, setMessages] = useState([]);

  const room = drone.subscribe("secret-room");
  room.on("open", (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Connected to room");
    }
  });

  room.on("message", (newMessage) =>
    setMessages((prevState) => [...prevState, newMessage.data])
  );

  const element = document.getElementById("last-element");

  useEffect(() => {
    if (element) {
      element.scrollIntoView();
    }
  }, [messages, element]);

  return (
    <div className="output">
      {messages?.map((message, index) => (
        <div key={index}>
          <div>{message.username}</div>
          <div className="message" style={{ backgroundColor: message.color }}>
            {message.msg}
          </div>
        </div>
      ))}
      <div id="last-element" />
    </div>
  );
}
