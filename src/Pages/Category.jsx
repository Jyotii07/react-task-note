import React, { useState } from 'react';
import ShowCat from './ShowCat ';
import './style.css'

export default function Category() {

  const [input, setInput] = useState("");
  const [data, setData] = useState([])
  
  const submitHandle = (e) =>{
    e.preventDefault();
    if(input === ""){
      alert("Fill the field");
    }else{
    console.log("submitted" , input);
    const newData = input;
    setData([...data, newData])

    // console.log(data);
    setInput("");
  }}
    

  return (
    <div>
      <h1>Add Your Task</h1>
      <div><input type="text" name="task" placeholder='Add Your Task' className='cat-input' id="task" onChange={(e)=>setInput(e.target.value) } value={input} required />
      
      <button onClick={submitHandle} className="cat-btn">Click Me</button></div>
      
<div>
<tr>
    <th>Task Name</th>
    <th className='delete'>Delete</th>
  </tr>
  <tr>
    <td>Groceries</td>
    <td className='delete'>X</td>
  </tr>
  <tr>
    <td>Study</td>
    <td className='delete'>X</td>
  </tr>
  <tr>
    <td>Gym</td>
    <td className='delete'>X</td>
  </tr>
{data.map((q)=>
  <>
  
  
  <ShowCat value={q}/>
 
  </>
  )}
</div>
 
    
        
   
    </div>
  )
}

