import React, { useState } from 'react';


function PropsFun(props){

    return(
        <>
        <table>
           <tr>
           <th>Students details</th>
           </tr>

        <tr><td>Name</td><td>{props.name}</td></tr> 
        <tr><td>City</td><td>{props.city}</td></tr>
        <tr><td>Moblie</td><td>{props.other.moblie}</td></tr>
        <tr><td>Age</td><td>{props.other.Age}</td></tr>

        </table>
        
        </>
    )
}

export default PropsFun;