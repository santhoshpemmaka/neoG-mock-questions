import React from 'react';
import { useState } from 'react/cjs/react.development';
import Mock15 from './Mock15';

const Mock16 = () => {
    const [typeText,settypeText] = useState();
    const [displayText,setdisplayText] = useState();
    const inputHandler = (e) => {
        settypeText(e.target.value);
    }
    const btnHandler = () => {
       if(typeText.length>10)
       setdisplayText('Sucesss')
       else
       setdisplayText("Password length should greater than 10")
    }
    
    return(
        <div>
            <h1>Mock16</h1>
            <input type='password' value={typeText} onChange={(e) => inputHandler(e) }/>
            <button onClick={btnHandler} disabled={typeText.length>10? false : true}>Check Password</button>
            <h3>{displayText}</h3>
        </div>
    )
}

export default Mock16;