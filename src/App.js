import './App.css';
import NavbarBot from './components/NavbarBot';
import NavbarTop from './components/NavbarTop'
import Visualization from './components/Visualization';
import React, {useState} from 'react';

function App() {
  const [array, setArray] = useState([])
  return (
    <>
      <NavbarTop />
      <NavbarBot array={array} setArray={setArray}/>
      <Visualization array={array} setArray={setArray}/>
    </>
  );
}

export default App;
