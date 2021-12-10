import React, { useState } from 'react';

const Mock1 = () => {
    const [responseApi,setresponseApi] = useState();
    const buttonHandler = () => {
        const urlName = 'https://nftbaazarapi.rawheatg.repl.co/product';
        fetch(urlName)
        .then(res => res.json())
        .then(json => setresponseApi(json.data))
        .catch((err) => {
            console.log('error')
        })
    }
    const filterData = () => {
        const filterResponse = responseApi && responseApi.filter(res => {
            return(
                Number(res.price) > 500
            )
        })
        setresponseApi(filterResponse)
    }
    return(
        <div>
            <h1>Mock Test</h1>
            <button onClick={buttonHandler}>Fetch Api</button>
            <button onClick={filterData}>Filter Data</button>
            <ul>
                {responseApi && responseApi.length>1 && responseApi.map((res)=>{
                    return(
                        <li>{res.name} cost is the  -<span style={{color:'blue',fontWeight:'bold'}}> {res.price}</span></li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Mock1;