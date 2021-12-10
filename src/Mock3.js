import React, { useState } from 'react';


const Mock3 = () => {
    const [sellingCost,settypeNumber] = useState();
    const [buyingCost,settypeNumber1] = useState();
    const [numberStocks,settypeNumber2] = useState();
    const [displayText,setdisplayText] = useState();
    const [textColor,settextColor] = useState();
    const inputHandler = (e) => {
        settypeNumber1(Number(e.target.value));
    }
    const inputHandler3 = (e) => {
        settypeNumber(Number(e.target.value));
    }
    const inputHandler2 = (e) => {
       settypeNumber2(Number(e.target.value));
    }

    const buttonHandler = () => {
        let totalSellingcost = sellingCost * numberStocks;
        let totalBuyingcost = buyingCost * numberStocks;
        console.log(totalSellingcost,totalBuyingcost)
        let result ='';
        if(totalBuyingcost < totalSellingcost){
            result = 'Profit'
            settextColor('green')
        }
        else if(totalSellingcost === totalBuyingcost){
            result = 'No Profit and No Loss';
            settextColor('green')
        }
        else{
            result = 'Loss'
            settextColor('red')
        }
        setdisplayText(result);

    }

    return(
        <div>
            <h1>Mock3</h1>
            <input type='number' value={buyingCost}  onChange={(e) => inputHandler(e)}  />
            <br/>
            <input type='number' value={sellingCost} onChange={(e) => inputHandler3(e)} />
            <br/> 
            <input type='number' value={numberStocks} onChange={(e) => inputHandler2(e)} />
            <br/>
            <button onClick={buttonHandler}>Profit - Losses</button>
            <h3 style={{color:`${textColor}`}}>{displayText}</h3>
        </div>
    )
}

export default Mock3;