import React, { Component } from 'react';
import img2 from '../image/104';

class View extends Component {
   
    
    render() { 
        return <>
            <h1 class='heading'><marquee behavior="alternate" direction="left" scrollAmount={"5"}>Your To-Do List App</marquee>
                </h1>
            <img src={img2} alt="" className='img2' height={"400px"} width={"400"}/>
            <h2>A To-do List app lets you write, organize, and reprioritize your tasks more efficiently.</h2>
            <h4>They also let you attach notes, links, and files to a task, and many let you see when someone else has completed a task. In many ways, a good to-do app is the ultimate productivity app.</h4>
       
            <h2>Features of To-Do App</h2>
            <blockquote style={{marginTop:'-20px'}}>
            <ul>
              
                <li>Add, Edit & Delete Task</li>
                <li>Add, Edit & Delete SubTask</li>
                <li>Enable or Disable </li>
                <li>Advanced Filter, Sort, Display</li>
               
            </ul>
            </blockquote>
        </>
    }
}
 
export default View;