import React, { useState, useEffect } from 'react';

const room_name = process.env.REACT_APP_ROOM_NAME;

export default function Output({drone, username}) {
    const room = drone.subscribe(room_name);

    const [messages, setMessages] = useState([]);
    
    room.on('message', message => {
        console.log(message)
        const {data} = message;
        setMessages(prevState => ([...prevState, data])) 
        });
    
    const element = document.getElementById("last-element");
      useEffect(() => {
        if (element) {
          element.scrollIntoView();
        }
      }, [messages, element]);

    return(
        <div className="output">
             {messages.map((data, index) => (
             <div key={index} className='wrapper' style={{flexDirection: data.username === username ? 'row-reverse' : 'row'}}>
                <div>
                    <div className='username'>{data.username}</div>
                    <div className='message' style={{backgroundColor: data.color}}>{data.text}</div>
                </div>
            </div>
            ))}
            <div id="last-element"/>
        </div>)             
}