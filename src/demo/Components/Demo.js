import React from 'react'
import { Link } from 'react-router-dom';

function Demo() {
  return (
    <div className="demo-container">
      <Link to="/">
        <p>Go back to main</p>
      </Link>
    </div>
  )
}

export default Demo
