import React, { useState } from 'react';

const Mock5 = () => {
    const [typeText,settypeText] = useState();
    const [typeText1,settypeText1] = useState();
    const [displayText,setdisplayText] = useState();
    const inputHandler = (e) => {
        settypeText(e.target.value);

    }
    const inputHandler1 = (e) => {
        settypeText1(e.target.value)
    }
    const buttonHandler = () => {
        console.log(typeText1,typeText)
        if(typeText === typeText1){
            setdisplayText('Suceess')
        }
        else{
            setdisplayText('Failure')
        }
    }
    return(
        <div>
            <h1>Mock5</h1>
            <input type='text' value={typeText} onChange={(e) => inputHandler(e)} />
            <br/>
            <input type='password' value={typeText1} onChange={(e) => inputHandler1(e)} />
            <br/>
            <button onClick={buttonHandler}>Check</button>
            <h3>{displayText}</h3>
        </div>
    )
}

export default Mock5;