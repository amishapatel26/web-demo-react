import React, { useState } from "react";

function InputBox(){
const[name,setName] =useState("welcome");
const[print,setPrint]=useState(false)

    function update(e){
        setName(e.target.value)
        setPrint(false)  
    }

    return(
        <>
        <div>
            <p>Name: <input type="text" onChange={(e)=>update(e)}/></p>

            <button onClick={()=>setPrint(true)}>click me !</button>
            {
                print?<h2>{name}</h2>:null
            }
        </div>
        
        </>
    )
}
export default InputBox;