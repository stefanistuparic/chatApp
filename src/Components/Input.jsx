import React from "react";

const room_id = process.env.REACT_APP_SD_ROOM_ID

export default function Input({drone, color, username}) {

    
  function handleSubmit(e){

        e.preventDefault(e)
        drone.publish({
          room: "secret-room",
          message: {
            msg: e.target[0].value,
            color: `#${color}`,
            username: username
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
