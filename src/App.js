import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import RadioButtons from './Components/RadioButtons';
import CheckBoxes from './Components/Checkboxes';
import Switch from './Components/Switch';
import TextField from './Components/TextField';

import Links_To_Demo from './Components/Links_To_Demo';


function App() {
  return (
    <div className="App">
      <header></header>
      <Router>
        <Route path="" />
      </Router>
      <main>
        <form>
          <TextField />
          <Switch /> 
          <CheckBoxes />
          <br/>
          <RadioButtons />
        </form>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
