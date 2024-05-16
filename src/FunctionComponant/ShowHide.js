import React, { useState } from 'react';


function ShowHide(){
const[status,setStatus]=useState(true);


    return(
        <>
        <div>
            <h2>Show Hide Element</h2>
            {
                status?<h2>welcome</h2>:null
            }
            <button onClick={()=>setStatus(true)}>show</button>
            <button onClick={()=>setStatus(false)}>hide</button>

            <button onClick={()=>setStatus(!status)}>Toggle</button>
            </div>
        </>
    )
}
export default ShowHide;