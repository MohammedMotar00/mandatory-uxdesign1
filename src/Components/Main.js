import React from 'react';

import RadioButtons from '../Components/RadioButtons';
import CheckBoxes from '../Components/Checkboxes';
import Switch from '../Components/Switch';
import TextField from '../Components/TextField';
import Links_To_Demo from './Links_To_Demo';

function Main() {
  return (
    <>
      <Links_To_Demo />
      <div className="main-container">
        <header>
          <h1>Main</h1>
        </header>
        <main>
          <form>
            <TextField />
            <br/>
            <Switch />
            <br/>
            <CheckBoxes />
            <br/>
            <RadioButtons />
          </form>
        </main>
        <footer></footer>
      </div>
      </>
  )
}

export default Main
