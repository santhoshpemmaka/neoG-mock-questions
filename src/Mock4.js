import React, { useState } from 'react';



const Mock4 = () => {
    const [responseResult,setreponseResult] = useState();
    const btnHandler = () => {
        const urlName = 'https://stock-api.desaihetav.repl.co/list';
        fetch(urlName)
        .then(res => res.json())
        .then(json => setreponseResult(json.data))
        .catch((err) => {
            console.log('error occured',err);
        })
    }
    console.log(responseResult)
    return(
        <div>
            <h1>Mock4</h1>
            <button onClick={btnHandler}>Fetch Api</button>
            <ul>
            {responseResult && responseResult.length >1 && responseResult.map((res) => {
                return (
                    <li key={res.id}>{res.id} is the {res.name}</li>
                )
            })
            
            }
            </ul>
            
        </div>
    )
}

export default Mock4;