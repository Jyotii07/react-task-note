import React, { useState } from 'react';
import './style.css';
import img1 from '../image/101.jpg';
import Content from './Content';
import View from './Viewpage';
import Form from './Form';
import Category from './Category';
import RestApi from './RestApi';



const Profile=()=> {
    const professions = ["P r o f i l e ", "Category", "_API_ Data","Inception"];
    const [myProfession, setMyProfession] = useState("");

    const d = new Date();
    const dd = d.getDate();
    const mm = d.getMonth();
    const yy = d.getFullYear();


     return <>
        <div className='main-container'>
            <div className="profile">
                <img src={img1} className={"img1"} alt=""/>
                <h1>{dd}/{mm}/{yy}</h1>
                <div>
                        {professions.map(profession => (
                            <button
                                type="button"
                                key={profession}
                                className={"btn"}
                                onClick={() => setMyProfession(profession)}
                            >
                                {profession.toLocaleUpperCase()}
                            </button>
                        ))}
                    </div>
            </div>
            <div className="container">
            
              {/* <p>{myProfession}</p> */}
            <p>
          
            {myProfession === "" ? 
              < View />  : null
             }
            {myProfession === "P r o f i l e " ? 
              < Form />  : null
             }
              {myProfession === "Category" ? 
              < Category/> : null
             }
              {myProfession === "_API_ Data" ? 
              < RestApi/> : null
             }
             {myProfession === "Inception" ? 
              < View />  : null
             }
            </p>
           
            </div>
        </div>
        </>
    }


export default Profile;
