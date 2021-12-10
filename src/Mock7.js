import React from 'react';
import { useState } from 'react/cjs/react.development';

const Mock7 = () =>{
    const [responseResult,setresponseResult] = useState();
    const buttonHandler = () => {
        const urlName = 'https://jsonplaceholder.typicode.com/todos';
        fetch(urlName)
        .then(res => res.json())
        .then(json => setresponseResult(json))
        .catch((err)=>{
            console.log('error occured',err);
        })
    }
    console.log(responseResult)
    return(
        <div>
            <h1>Mock7</h1>
            <button onClick={buttonHandler}>Fetch Api</button>
            <ul>
                {responseResult && responseResult.length>1 && responseResult.map((res) => {
                    return(
                        <li key={res.id}>{res.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Mock7;