import React from 'react';
import { useState } from 'react/cjs/react.development';


const Mock18 = () => {
    const [typeText,settypeText] = useState();
    return(
        <div>
            <h1>Mock18</h1>
            <input type='text' value={typeText} onChange={(e) => settypeText(e.target.value)} maxLength ='15' />
            <button disabled={typeText.length>0 ? false : true }>Submit</button>
            
        </div>
    )
}

export default Mock18;