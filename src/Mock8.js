import React from 'react';
import { useState } from 'react/cjs/react.development';

const Mock8 = () =>{
    const [typeNumber,settypeNumber] = useState();
    const [displayText,setdisplayText] = useState();

    const buttonHandler = () => {
        let num1 = typeNumber;
        let num2 = typeNumber*typeNumber;
        console.log(num1,num2)
        let num3 = num2%100;
        console.log(num3)
        if(num3 == num1){
            setdisplayText('Automorphic');
        }
        else{
            setdisplayText('Not Automorphic')
        }
        settypeNumber('');
    }

    return(
        <div>
            <h1>Mock8</h1>
            <input type='number' value={typeNumber} onChange={(e) => settypeNumber(Number(e.target.value))} />
            <button onClick={buttonHandler}>Check Number</button>
            <h3>{displayText}</h3>
        </div>
    )
}

export default Mock8;