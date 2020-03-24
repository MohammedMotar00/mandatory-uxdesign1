import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './Components/Main';

import Demo from './demo/Components/Demo';
import InputField_demo from './demo/Components/InputField_demo';
import Switch_demo from './demo/Components/Switch_demo';
import CheckBox_demo from './demo/Components/CheckBox_demo';
import RadioButtons_demo from './demo/Components/RadioButtons_demo';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/demopage" component={Demo} />
        <Route path="/demopage/inputfield" component={InputField_demo} />
        <Route path="/demopage/switch" component={Switch_demo} />
        <Route path="/demopage/checkbox" component={CheckBox_demo} />
        <Route path="/demopage/radiobuttons" component={RadioButtons_demo} />
      </Router>
    </div>
  );
}

export default App;
