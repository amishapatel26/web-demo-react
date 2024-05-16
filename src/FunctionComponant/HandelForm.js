import React, { useState } from 'react';

function HandelForm(){

    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const[city,SetCity]=useState("");
    const[tnc,setTnc]=useState(false);


    function getFormdata(e){
        e.preventDefalut();

    }
    return(
        <>
        <form onSubmit={getFormdata}>

            <div>
                <h1>Form Control:- </h1>
                First Name: <input type='text'name='fname' onChange={(e)=>setFname(e.target.value)}/><br></br><br></br>
                Last name: <input type='text' name='lname' onChange={(e)=>setLname(e.target.value)} /><br></br><br></br>

                City: <select onChange={(e)=>SetCity(e.target.value)}>
                    <option>Select Any One City</option>
                    <option>Surat</option>
                    <option>Amreli</option>
                    <option>Rajkot</option>
                    <option>JunaGadh</option>
                </select> <br></br><br></br>
                <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/>Accept Term & policy <br></br><br></br>
                <button type='sumbit'>Submit</button>
            </div>
        </form>

        <table>
            <tr>
                <td>
                    Frist name :
                </td>
                <td>setFname</td>
            </tr>
            <tr>
                <td>
                    Last name :
                </td>
                <td>setLname</td>
            </tr>
            <tr>
                <td>
                    City name :
                </td>
                <td>SetCity</td>
            </tr>
        </table>
        </>
    )
}
export default HandelForm;