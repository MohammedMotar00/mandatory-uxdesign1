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
