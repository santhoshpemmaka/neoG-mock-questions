import React from 'react';
import { useState } from 'react/cjs/react.development';
// Create a web app where I can input a text. 
// Now, create three buttons: red, green, blue. Clicking on the button should change the text color.

const Mock23 = () => {
    const [textColor,settextColor] = useState();
    const btnHandler = (e) => {
        let operator = e.target.innerText;
        let result;
        if(operator == 'Red'){
            result = 'red'
        }
        else if(operator == 'Green'){
            result = 'green'
        }
        else{
            result = 'blue';
        }
        settextColor(result);
    }
    return(
        <div>
            <h1>Mock23</h1>
            <p style={{color:`${textColor}`}}>neoG Bootcamp</p>
            <button onClick={(e) => btnHandler(e)}>Red</button>
            <button onClick={(e) => btnHandler(e)}>Green</button>
            <button onClick={(e) => btnHandler(e)}>Blue</button>
        </div>
    )
}

export default Mock23;