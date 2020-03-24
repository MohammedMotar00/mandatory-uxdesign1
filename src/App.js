import React from 'react';
import './App.css';

import RadioButtons from './Components/RadioButtons';
import CheckBoxes from './Components/Checkboxes';
import Switch from './Components/Switch';
import TextField from './Components/TextField';

function App() {
  return (
    <div className="App">
      <header></header>
      <form>
        <TextField />
        <Switch /> 
        <CheckBoxes />
        <br/>
        <RadioButtons />
      </form>
      <footer></footer>
    </div>
  );
}

export default App;
