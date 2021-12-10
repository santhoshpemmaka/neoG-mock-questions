import React from 'react';
import { useState } from 'react/cjs/react.development';
// Create a web app with a button loaded. Show a text loading... on a web app. However, hide it if I click on the button loaded.



const Mock24 = () => {
    const [buttonStatus,setbuttonStatus] = useState(true);
    const btnHandler = () => {
        setbuttonStatus(false)
    }

    return(
        <div>
            <h1>Mock24</h1>
            {buttonStatus && <button onClick={btnHandler} >loading...</button>}
        </div>
    )
}

export default Mock24;