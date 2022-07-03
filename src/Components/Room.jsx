import React, {useState} from 'react';
import Input from './Input';
import Output from './Output';
import '../App.css';


export default function Room () {

    const[text, setText] = useState([]);
    return (
    
        <div className='container'>
            <div className='header'>
                <h1>Messages</h1>
                <p>Please be polite.</p>
            </div>
            <div className='input-output-container'>
            <Output text={text}/>
            <Input setText={setText}/>
            </div>
            
            
        </div>  

    )
}