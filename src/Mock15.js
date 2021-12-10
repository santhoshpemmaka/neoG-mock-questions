import React from 'react';
import { useState } from 'react/cjs/react.development';

const Mock15 = () => {
    const [typeText,settypeText] = useState();
    const [typePassword,settypePassword] = useState();
    const [displayText,setdisplayText] = useState();
    const inputHandler = (e) => {
        settypeText(e.target.value)
    }

    const inputHandler1 = (e) => {
        settypePassword(e.target.value)

    }
    const btnHandler = () => {
        let result = typePassword.includes(typeText);
        if(result == true){
            setdisplayText("Password can't your name");
        }
        else{
            setdisplayText('Sucess');
        }
    }
    return(
        <div>
            <h1>Mock15</h1>
            <input type='text' value={typeText}  onChange={(e) => inputHandler(e)} />
            <input type='password' value={typePassword} onChange={(e) => inputHandler1(e)} />
            <button onClick={btnHandler}>Check</button>
            <h3>{displayText}</h3>
        </div>
    )
}

export default Mock15;