import './App.css';
import NavbarBot from './components/NavbarBot';
import NavbarTop from './components/NavbarTop'
import Visualization from './components/Visualization';
import React, {useState} from 'react';

function App() {
  const [array, setArray] = useState([])
  // Contains the elements we are comparing
	const [compareElements, setCompareElements] = useState([]);
	// Contains the indexes of the elements that have finished sorting
	const [doneElements, setDoneElements] = useState([]);
  return (
    <>
      <NavbarTop />
      <NavbarBot array={array} setArray={setArray} compareElements={compareElements} setCompareElements={setCompareElements} doneElements={doneElements} setDoneElements={setDoneElements}/>
      <Visualization array={array} setArray={setArray} compareElements={compareElements} setCompareElements={setCompareElements} doneElements={doneElements} setDoneElements={setDoneElements}/>
    </>
  );
}

export default App;
