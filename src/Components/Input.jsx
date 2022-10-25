import React from "react";
import { useState } from "react";


const room_name = process.env.REACT_APP_ROOM_NAME;

export default function Input ({drone, username, color}) {

    const [messagestate, setMessagestate] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        drone.publish({
            room: room_name,
            message: {
                text: messagestate,
                username,
                color
            }
          });        
        setMessagestate("");
    }

    function handleChange(e) {
        setMessagestate(e.target.value);
    }

    
   
    return(
        <div className="input-bottom">
            <form className="form" onSubmit={handleSubmit}>
                <input value={messagestate} className="input"name="text" type="text" placeholder="Please enter your message and hit send." onChange={handleChange}/>
                <button type="submit" className="button">Send</button>
            </form>
        </div>
    );
}