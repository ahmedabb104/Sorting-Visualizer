import './App.css';
import NavbarBot from './components/NavbarBot';
import NavbarTop from './components/NavbarTop'
import Visualization from './components/Visualization';
import React, {useState} from 'react';

function App() {
  const [array, setArray] = useState([]);
  // Sets the speed of visualization
  const [speed, setSpeed] = useState([]); 
  // Controls state of disabling the visualization controls
	const [disabled, setDisabled] = useState(false);
  // Contains the elements we are comparing
	const [compareElements, setCompareElements] = useState([]);
	// Contains the indexes of the elements that have finished sorting
	const [doneElements, setDoneElements] = useState([]);


  return (
    <>
      <NavbarTop speed={speed} setSpeed={setSpeed}
                 disabled={disabled}/>
      <NavbarBot array={array} setArray={setArray} 
                 disabled={disabled} setDisabled={setDisabled}
                 speed={speed}
                 compareElements={compareElements} setCompareElements={setCompareElements} doneElements={doneElements} setDoneElements={setDoneElements}/>
      <Visualization array={array} setArray={setArray} 
                     compareElements={compareElements} doneElements={doneElements}/>
    </>
  );
}

export default App;
