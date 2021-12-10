// Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.

import React from 'react';
import { useState } from 'react/cjs/react.development';

const Mock21 = () => {
    const [typeSize,settypeSize] = useState(20);
    const btnHandler = (e) => {
        let operator = e.target.innerText;
        console.log(operator)
        let result;
        if(operator == '+'){
            result = typeSize+2
        }
        
        else{
           result = typeSize-2;
        }
        settypeSize(result)
        console.log(typeSize)
        
    }
    return(
        <div>
            <h1>Mock21</h1>
            <p style={{fontSize:`${typeSize}px`}}>Neog BootCamp</p>
            <button onClick={(e) => btnHandler(e)}>+</button>
            <button onClick={(e) => btnHandler(e)}>-</button>
        </div>
    )
}

export default Mock21;