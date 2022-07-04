import React from "react";
import { generateUsername } from 'friendly-username-generator';

const room_id = process.env.REACT_APP_SD_ROOM_ID

export default function Input({drone}) {

  const randomCol = Math.floor(Math.random()*16777215).toString(16);
  const randomUser = generateUsername();


    
  function handleSubmit(e){

        e.preventDefault(e)
        drone.publish({
          room: "secret-room",
          message: {
            msg: e.target[0].value,
            color: `#${randomCol}`,
            username: randomUser
            }
        });
        e.target[0].value = '';
       }

  return (
    <div className="input-bottom">
      <form onSubmit={handleSubmit} className="form">
        <input name="text" type="text" placeholder="Enter your message here" className="input"/>
        <button type="submit" className="button">Send</button>
      </form>
    </div>
  );
}
