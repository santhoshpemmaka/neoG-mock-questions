import React from 'react';
import { useState } from 'react/cjs/react.development';


const Mock17 = () => {
    const [borderSize,setborderSize] = useState(1);
    const btnHandler = () => {
        setborderSize(5);
    }
    const btnHandler1 = () => {
        setborderSize(10);
    }
    return(
        <div>
            <h1>Mock17</h1>
            <p style={{border:`${borderSize}px solid blue`}}>Neog Bootcamp</p>
            <button onClick={btnHandler}>5Px</button>
            <button onClick={btnHandler1}>10Px</button>
        </div>
    )
}

export default Mock17;