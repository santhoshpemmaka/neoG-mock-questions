import React from 'react';
import { useState } from 'react/cjs/react.development';

const Mock19 = () => {
    const [responseResult,setresponseResult] = useState();

    const btnHandler = () => {
        const urlName = 'https://jsonplaceholder.typicode.com/todos';
        fetch(urlName)
        .then(res => res.json())
        .then(json => setresponseResult(json))
        .catch((err) => {
            console.log('Error Ocuured',err);
        })
    }
    console.log(responseResult)
    return(
        <div>
            <h1>Mock19</h1>
            <button onClick={btnHandler}>Fetch Api</button>
            {responseResult && responseResult.length >0 && responseResult.map((res) => {
                if(res.completed == false){
                    return(
                        <li style={{color:'blue'}} key={res.id}>{res.title}is false</li>
                    )
                }
            })}
        </div>
    )
}

export default Mock19;