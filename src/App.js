import React from 'react';
import './App.css';

import RadioButtons from './Components/RadioButtons';
import CheckBoxes from './Components/Checkboxes';
import Switch from './Components/Switch';
import TextField from './Components/TextField';

function App() {
  return (
    <div className="App">
      <form>
        <TextField />
        <Switch /> 
        <CheckBoxes />
      </form>
    </div>
  );
}

export default App;
