import React from 'react'
import { Link } from 'react-router-dom';

function Links_To_Demo() {
  return (
    <div className="demo">
      <div className="demo_container">
      <Link to="/inputfield">
        <h2>Input field</h2>
      </Link>

      <Link to="/switch">
        <h2>Switch</h2>
      </Link>

      <Link to="/checkbox">
        <h2>Checkbox</h2>
      </Link>

      <Link to="/radiobutton">
        <h2>Radio buttons</h2>
      </Link>
      </div>
    </div>
  )
}

export default Links_To_Demo
