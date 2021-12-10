import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Mock25.css';
// Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. 
// Someone can ask to make the submit button disabled. 
// Some can ask to make the input field green or red depending on input

const Mock25 = () => {
    const [typePassword,settypePassword] = useState();
    const [displayText,setdisplayText] = useState();
    const btnHandler = () => {
        if(typePassword.length>10){
            setdisplayText('Success')
        }
        else{
            setdisplayText('Error')
        }
        settypePassword();
    }
    return(
        <div>
            <h1>Mock25</h1>
            <input type='password' value={typePassword} onChange={(e) => settypePassword(e.target.value)} />
            <button className='btn' disabled={typePassword && typePassword.length>0? false : true}>Check</button>
            <h3>{displayText}</h3>
        </div>
    )
}

export default Mock25;