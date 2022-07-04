import React, { useState } from "react";
import Input from "./Input";
import Output from "./Output";
import "../App.css";
import { generateUsername } from 'friendly-username-generator';

const channel_id = process.env.REACT_APP_SD_CHANNEL_ID;

export default function Room() {
  const drone = new window.Scaledrone("kiKME095hd1S1kPA");
  const randomCol = Math.floor(Math.random() * 16777215).toString(16);
  const randomUser = generateUsername();

  drone.on("open", (error) => {
    if (error) {
      return console.error(error);
    }
  });

  return (
    <div className="container">
      <div className="header">
        <h1>Messages</h1>
        <p>Please be polite.</p>
      </div>
      <div className="input-output-container">
        <Output drone={drone} username={randomUser} />
        <Input drone={drone} color={randomCol} username={randomUser}/>
      </div>
    </div>
  );
}
