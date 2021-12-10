import React from 'react';
import { useState } from 'react/cjs/react.development';
// Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. 
// Based on the button clicked perform the operation on the two inputs.
// You can do this in React or vanillaJS based on your choice.

const Mock20 = () => {
    const [typeNumber,settypeNumber] = useState();
    const [typeNumber1,settypeNumber1] = useState();
    const [displayNumber,setdisplayNumber] = useState();

    const btnHandler = (e) => {
        let operator = e.target.innerText;
        if(operator == '+'){
            setdisplayNumber(typeNumber+typeNumber1)
        }
        else if(operator == '-')
        setdisplayNumber(typeNumber-typeNumber1)
        else if(operator == '*')
        setdisplayNumber(typeNumber*typeNumber1)
        else if(operator == '/')
        setdisplayNumber(typeNumber/typeNumber1)
        else
        setdisplayNumber('Invalid Input')

    }

    return(
        <div>
            <h1>Mock20</h1>
            <input type='number' value={typeNumber} onChange={(e) => settypeNumber(Number(e.target.value))} />
            <input type='number' value={typeNumber1} onChange={(e) => settypeNumber1(Number(e.target.value))} />
            <button onClick={(e) => btnHandler(e)}>+</button>
            <button onClick={(e) => btnHandler(e)}>-</button>
            <button onClick={(e) => btnHandler(e)}>*</button>
            <button onClick={(e) => btnHandler(e)}>/</button>
            <h3>{displayNumber}</h3>
        </div>
    )
}

export default Mock20;