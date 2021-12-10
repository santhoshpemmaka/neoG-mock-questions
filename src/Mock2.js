import React, { useState } from 'react';


const Mock2 = () => {
    const [typeText,settypeText] = useState();
    const [typePassword,settypePassword] = useState();
    const inputHandler1 = (e) => {
        settypeText(e.target.value);
    }
    const inputHandler2 = (e) => {
        settypePassword(e.target.value);
    }
    return(
        <div>
            <h1>Mock2</h1>
            <input type='text' value={typeText} onChange={(e)=> inputHandler1(e)} />
            <br/>
            <input type='password' value={typePassword} onChange={(e) => inputHandler2(e)} />
            <br/>
            <button disabled = {typeText == typePassword ? false : true} >Login</button>
        </div>
    )
}

export default Mock2;