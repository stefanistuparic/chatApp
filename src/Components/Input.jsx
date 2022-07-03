import React from "react";

export default function Input({setText}) {

    
function handleSubmit(e){
        e.preventDefault(e)
        setText( (prevState) => ([...prevState, e.target[0].value]));
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
