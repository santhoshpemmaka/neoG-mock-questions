import React from 'react';
import { useState } from 'react/cjs/react.development';
// Q1) Create an Input Element, which shows a display message according to the Input text.
// If you type -"Tanvi" - then show, "She is the best CEO ever!"
// "Tanay" - then show, "He is our FUNNY mentor!"
// "Swapnil" - then show, "He helps us CONQUER jobs!""Akanksha" - then show, "She is our CHEERFUL Interviewer!"

const Mock11 = () =>{
    const [typeText,settypeText] = useState();
    const [displayText,setdisplayText] = useState();
    const inputHandler = (e) => {
        settypeText(e.target.value);
    }
    const btnHandler = () => {
        if(typeText == 'Tanvi'){
            setdisplayText('She is the best CEO ever!')
        }
        else if(typeText == 'Tanay'){
            setdisplayText('He is our FUNNY mentor')
        }
        else if(typeText == 'Swapnil'){
            setdisplayText('He helps us conquer jobs!')
        }
        else{
            setdisplayText('Please try again');
        }
    }
    return(
        <div>
            <h1>Mock11</h1>
            <input type='text' value={typeText} onChange={(e) => inputHandler(e)}  />
            <button onClick={btnHandler}>Check</button>
            <h3>{displayText}</h3>
        </div>
    )
}

export default Mock11;