import React from 'react';
import { useState } from 'react/cjs/react.development';

const Mock9 = () => {
    const [costPrice,setcostPrice] = useState();
    const [currentPrice,setcurrentPrice] = useState();
    const [displayText,setdisplayText] = useState();
    const inputHandler = (e)=> {
        setcostPrice(Number(e.target.value));

    }
    const inputHandler1 = (e) =>{
        setcurrentPrice(Number(e.target.value));
    }
    const buttonHandler = () =>{
        if(costPrice < currentPrice){
            setdisplayText('You profit')
        }
        else{
            setdisplayText('You loss')
        }
    }
    return(
        <div>
            <h1>Mock9</h1>
            <input type='number' value={costPrice} onChange={(e) => inputHandler(e)} />
            <br/>
            <input type='number' value={currentPrice} onChange={(e) => inputHandler1(e)} />
            <br/>
            <button onClick={buttonHandler}>Check Profit/Loss</button>
            <h3>{displayText}</h3>
        </div>
    )
}

export default Mock9;