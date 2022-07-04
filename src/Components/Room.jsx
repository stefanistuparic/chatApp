import React, {useState} from 'react';
import Input from './Input';
import Output from './Output';
import '../App.css';

const channel_id = process.env.REACT_APP_SD_CHANNEL_ID

export default function Room () {
    const drone = new window.Scaledrone("kiKME095hd1S1kPA");
    drone.on('open', error => {
        if (error) {
          return console.error(error);
        }});

    return (    
        <div className='container'>
            <div className='header'>
                <h1>Messages</h1>
                <p>Please be polite.</p>
            </div>
            <div className='input-output-container'>
            <Output drone={drone}/>
            <Input drone={drone}/>
            </div>         
        </div>  

    )
}