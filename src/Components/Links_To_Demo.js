import React from 'react'
import { Link } from 'react-router-dom';

import '../Css/Main.css';

function Links_To_Demo() {
  return (
    <div className="demo">
      <div className="demo_container">
      <Link style={{textDecoration: 'none'}} to="/demopage/inputfield">
        <h2>Input field</h2>
      </Link>

      <Link style={{textDecoration: 'none'}} to="/demopage/switch">
        <h2>Switch</h2>
      </Link>

      <Link style={{textDecoration: 'none'}} to="/demopage/checkbox">
        <h2>Checkbox</h2>
      </Link>

      <Link style={{textDecoration: 'none'}} to="/demopage/radiobuttons">
        <h2>Radio buttons</h2>
      </Link>
      </div>
    </div>
  )
}

export default Links_To_Demo
