import React from 'react'
import { useState } from 'react'
import Profile from './Profile';

export default function Form() {

    const [fname, setFname] = useState('');
    const [data, setData] = useState([])

    const submitHandle = (e) =>
    {
        e.preventDefault();
        
        // console.log(data);
        if(fname===""){
           alert("Fill the field first...")
        }
        else{
            const newData = fname;
            setData([...data, newData])
            alert("Thank You !!! Have a nice day");
            
        }
     
        setFname("");
    }

  return (
    <div>
       
        <input type="text" placeholder='First Name' 
        name='fname'
        value={fname}
        onChange={(e)=>setFname(e.target.value)} className="input" />
       
         <input type="text" placeholder='Middle Name' 
        name='fname' required className="input"/>
        <input type="text" placeholder='Last Name' 
        name='fname' required className="input"/>
        <input type="email" placeholder='Email address' name="email" id=""  required className="input"/>
         <button onClick={submitHandle} className="input-btn">Submit</button>
  

    </div>
  )
}
