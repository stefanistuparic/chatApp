import React, { useEffect, useState } from "react";

const room_id = process.env.REACT_APP_SD_ROOM_ID;

export default function Output({ drone, username }) {
  const [messages, setMessages] = useState([]);

  const room = drone.subscribe(room_id);
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
        <div
          className="wrapper"
          key={index}
          style={{
            flexDirection:
              username === message.username ? "row-reverse" : "row",
          }}
        >
          <div>
            <div
              className="username"
              style={{
                textAlign:
                  username === message.username ? "right" : "left",
              }}
            >
              {message.username}
            </div>
            <div className="message" style={{ backgroundColor: message.color }}>
              {message.msg}
            </div>
          </div>
        </div>
      ))}
      <div id="last-element" />
    </div>
  );
}
