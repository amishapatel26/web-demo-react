import logo from './logo.svg';
import './App.css';
import Demo from './FunctionComponant/Demo';
import Test from './ClassComponets/Test';
import TestFun from './FunctionComponant/TestFun';

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
    </div>
  );
}

export default App;
