import React from 'react';

function HandelForm(){

    return(
        <>
        <form>

            <div>
                <h1>Form Control:- </h1>
                First Name: <input type='text'name='fname'/><br></br><br></br>
                Last name: <input type='text' name='lname' /><br></br><br></br>

                City: <select>
                    <option>Select Any One City</option>
                    <option>Surat</option>
                    <option>Amreli</option>
                    <option>Rajkot</option>
                    <option>JunaGadh</option>
                </select> <br></br><br></br>
                <input type='checkbox'/>Accept Term & policy <br></br><br></br>
                <button type='sumbit'>Submit</button>
            </div>
        </form>
        </>
    )
}
export default HandelForm;