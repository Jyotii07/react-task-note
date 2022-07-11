import React, { useEffect, useState } from 'react'

export default function RestApi() {

    const [data,setData] = useState([])
    //get Api
    useEffect(()=>{
        const url = "https://jsonplaceholder.typicode.com/posts";

        fetch(url)
        .then(r => r.json())
        .then(json =>{setData(json) })
       
        .catch(e => {console.log("e" , e)})
    },[])


  return (
    <>
    <h1>Rest Api Data</h1>
    <ul>
        {data.map(item=>
        {return(<>
            <li>{item.userId}</li>
            <li>{item.title}</li>
            <li>{item.body}</li>
            <br/>
            </>
        )
           
        })}

    </ul>
    </>
  )
}
