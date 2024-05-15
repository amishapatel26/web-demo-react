import logo from './logo.svg';
import './App.css';
import Demo from './FunctionComponant/Demo';
import Test from './ClassComponets/Test';
import TestFun from './FunctionComponant/TestFun';
import FunctionEvent from './FunctionComponant/FunctionEvent';
import StateFun from './FunctionComponant/StateFun';

function App() {
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
      
      <Demo></Demo>
   <Test></Test>
   <TestFun></TestFun>
   <FunctionEvent></FunctionEvent>
   <StateFun></StateFun>
    </div>
  );
}

export default App;
