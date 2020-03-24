import React from 'react'
import { Link } from 'react-router-dom';

import { FaArrowAltCircleLeft } from 'react-icons/fa';

import '../css/Demo.css';

function Demo() {
  return (
    <div className="demo-container">
      <Link style={{ textDecoration: 'none' }} to="/">
        <p>
          <span style={{ padding: '0 20px' }}><FaArrowAltCircleLeft /></span>
          Go back to main
        </p>
      </Link>
    </div>
  )
}

export default Demo
