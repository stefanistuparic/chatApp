import React from "react";
import Input from './Input';
import Output from './Output';
import '../App.css';
import {generateUsername } from "unique-username-generator";
import { getDarkColor } from "./Utilities";

const channel_id = process.env.REACT_APP_CHANNEL_ID;


export default function Room() {
   const drone = new window.Scaledrone(channel_id);
   const randomCol = getDarkColor();
   const username = generateUsername("", 0);
   
    drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
    });

    return(
        <div className="container">
          <div className="header">
            <h1>Hi! Please be polite.</h1>
          </div>
          <div className="input-output-container">
              <Output drone={drone} username={username}/>
              <Input drone={drone} username={username} color={randomCol}/>
          </div>
        </div>
    )
}