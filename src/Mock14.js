import React from 'react';
import { useState } from 'react/cjs/react.development';

const Mock14 = () => {
    const [showText,setshowText] = useState();

    const btnHandler = () => {
        let urlName = 'https://mystery-api.kushanksriraj.repl.co/get';
        fetch(urlName)
        .then(res =>{
            if(Number(res.status) == 404)
            setshowText('Page Not Found')
            else if(Number(res.status)== 401)
            setshowText('you are not logged in')
            else if(Number(res.status) == 200)
            setshowText('API is working')
        })
        .catch((err)=>{
            console.log('error ocurred',err);
        })
    }
    return(
        <div>
            <h1>Mock14</h1>
            <button onClick={btnHandler}>Fetch Api</button>
            <h3>{showText}</h3>
        </div>
    )
}

export default Mock14;