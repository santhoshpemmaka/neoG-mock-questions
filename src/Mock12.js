import React from 'react';
import { useState } from 'react/cjs/react.development';
// Create 2 buttons with text YJHD and ZNMD. At the click of a button, call the given API with the query as same as the button text, 
// and display the message you get on the screen. 
// Followup: Instead of using calling the fetch function twice in both events(clicking of buttons), 
// enclose it in a different function so that it can be used accordingly in both areas.



const Mock12 = () => {
    const [displayText,setdisplayText] = useState();
    const [displayText1,setdisplayText1] = useState();

    const btnHandler = (e) => {
        const urlName = 'https://mock-practice.prakhar10v.repl.co/bollywood?name='+e.target.innerText;
        fetch(urlName)
        .then(res => res.json())
        .then(json => setdisplayText(json.message))
        .catch((err) => console.log('Error occured',err));
    }
    
    
    return(
        <div>
            <h1>Mock12</h1>
            <button onClick={(e) =>btnHandler(e)}>YJHD</button>
            <button onClick={(e) =>btnHandler(e)}>ZNMD</button>
            <h3>{displayText}</h3>
            
        </div>
    )
}

export default Mock12;