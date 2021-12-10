import React from 'react';
import { useState } from 'react/cjs/react.development';

const Mock10 = () => {
    const [textName,settextName] = useState();
    const [displayNumber,setdisplayNumber] = useState();
    const [guessNumber,setguessNumber] = useState();
    const [displayText,setdisplayText] = useState();
    const [textColor, settextColor] = useState();

    const inputhandler = (e) => {
        settextName(e.target.value);
    }

    const inputhandler1 = (e) => {
        setguessNumber(e.target.value);
    }

    const buttonHandler = () =>{
        const urlName = 'https://otpgenerator.ishanjirety.repl.co/get-otp?name=';
        fetch(urlName+textName)
        .then(res => res.json())
        .then(json => setdisplayNumber(json.otp))
        .catch((err) => {
            console.log('Error Ocuured',err)
        })
        
    }
    const btnValidate = () => {
        if(displayNumber == guessNumber){
            setdisplayText('Sucess')
            settextColor('green');
        }
        else{
            setdisplayText('Failure')
            settextColor('red');
        }
    }
    console.log(displayNumber)
    return(
        <div>
            <h1>Mock10</h1>
            <input type='text' value={textName} onChange={(e) => {inputhandler(e)}}  />
            <input type='text' value={guessNumber} onChange={(e) => {inputhandler1(e)}} />
            <button onClick={buttonHandler}>Fetch Api</button>
            <button onClick={btnValidate}>Validate</button>
            <h3 style={{color:`${textColor}`}}>{displayText}</h3>

        </div>
    )
}

export default Mock10;