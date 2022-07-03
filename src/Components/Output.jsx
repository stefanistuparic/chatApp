import React, {useEffect}from 'react';


export default function Output({text}) {

    const element = document.getElementById("last-element");
    
    useEffect(() => {
        element.scrollIntoView();
    }, [text, element])

    return(
        <div className='output'>
             {text?.map(
                 ((newText, index) => (<div  className='message' key={index}>{newText}</div>))
                )}
            <div id='last-element'/>
        </div>
    )
}