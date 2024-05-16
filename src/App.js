import logo from './logo.svg';
import './App.css';
import Demo from './FunctionComponant/Demo';
import Test from './ClassComponets/Test';
import TestFun from './FunctionComponant/TestFun';
import FunctionEvent from './FunctionComponant/FunctionEvent';
import StateFun from './FunctionComponant/StateFun';
import StateClass from './ClassComponets/StateClass';
import PropsFun from './FunctionComponant/PropsFun';
import { useState } from 'react';
import InputBox from './FunctionComponant/InputBox';
import ShowHide from './FunctionComponant/ShowHide';
import HandelForm from './FunctionComponant/HandelForm';

function App() {
  
  // const[name,setName]=useState("amisha")
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
{/*       
      <Demo></Demo>
   <Test></Test>
   <TestFun></TestFun>
   <FunctionEvent></FunctionEvent>
   <StateFun></StateFun>
   <StateClass></StateClass>
   <PropsFun name={name} city="Surat" other={{moblie: 9512417932,Age:21}}></PropsFun>
   
   <button onClick={()=>setName('Mira')}>click</button> */}

   {/* <InputBox></InputBox> */}
   {/* <ShowHide></ShowHide> */}
   <HandelForm></HandelForm>
   
    </div>
  );
}

export default App;
