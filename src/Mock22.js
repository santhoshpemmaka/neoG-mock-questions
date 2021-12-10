import React from 'react';
import { useState } from 'react/cjs/react.development';
import Mock21 from './Mock21';

// Create a web app where I can input a text. Now, 
// create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

const Mock22 = () => {
    const [typeText,settypeText] = useState();
    const [displayText,setdisplayText] = useState();
    const btnHandler = (e) => {
        let operator = e.target.innerText;
        let result;
        if(operator == 'H1'){
           result = <h1>{typeText}</h1>
        }
        else if(operator == 'H2'){
            result = <h2>{typeText}</h2>
        }
        else{
            result = <h3>{typeText}</h3>
        }
        setdisplayText(result);
    }
    return(
        <div>
            <h1>Mock22</h1>
            <input type='text' value={typeText} onChange={(e) => settypeText(e.target.value)} />
            <button onClick = {(e)=> btnHandler(e)}>H1</button>
            <button onClick = {(e)=> btnHandler(e)}>H2</button>
            <button onClick = {(e)=> btnHandler(e)}>H3</button>
            {displayText}
        </div>
    )
}

export default Mock22;