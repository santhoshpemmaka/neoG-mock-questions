import React from 'react';
import { useState } from 'react/cjs/react.development';
// Take an input from the user in text format. 
// Have 3 buttons with the names of "Log" ,"Warn" and "Error".
// If user clicks on "Log" button then the text entered by user will be shown in black color.
// Similarly if the user clicks on "Warn " and "Error " buttons then the text entered by user will be shown on the screen in the yellow and red colors respectively. 

const Mock13 = () => {
    const [typeText,settypeText] = useState();
    const [textColor,settextColor] = useState();
    const inputHandler = (e) =>{
         settypeText(e.target.value);
    }
    const btnHandler = (e) => {
        let result = e.target.innerText;
        if(result == 'Log'){
            settextColor('black')
        }
        else if(result == 'Warn'){
            settextColor('yellow')
        }
        else{
            settextColor('red')
        }
    }
    return(
        <div>
            <h1>Mock13</h1>
            <input type='text'  value={typeText} onChange={(e) => inputHandler(e)} />
            <h3 style={{color:`${textColor}`}}>{typeText}</h3>
            <button onClick={(e) => btnHandler(e)}>Log</button>
            <button onClick={(e) => btnHandler(e)}>Warn</button>
            <button onClick={(e) => btnHandler(e)}>Error</button>
        </div>
    )
}

export default Mock13;