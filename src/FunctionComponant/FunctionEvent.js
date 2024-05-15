import React from 'react';


function FunctionEvent(){

    function clickme(){
        alert("hello World!!!!")
    }



    return(
        <>
        <h1>Welcome to Event Function</h1>
        <button onClick={clickme}>click the Button</button>
        </>
    )
}
export default FunctionEvent;