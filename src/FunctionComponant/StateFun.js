import React, { useState } from 'react';


function StateFun(){

    // var data="Welcome to react-js";

    const[data,setData]=useState("welcome to React-js");


    function upadate(){
    // data="State";
    // alert(data);
    setData("Welcome to usestate")
    }
    

    return(
        <>
        <h1>use  State</h1>
        <h2>{data}</h2>
        <button onClick={upadate}>Click </button>

        </>
    )
}

export default StateFun;