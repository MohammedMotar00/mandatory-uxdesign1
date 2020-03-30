import React, { useState } from 'react'
import Switch from '../../Components/Switch'

function Switch_demo() {
  const [disabled, updateDisabled] = useState(false);

  return (
    <div>
      <div className="components">
        <Switch disabled={disabled} />
        <label>check to disable your component!</label>
        <input
          type="checkbox"
          checked={disabled}
          onChange={() => updateDisabled(!disabled)}
        />
      </div>

      <div className="description">
        <p>
        Har skapat en <strong>Div</strong> container och en enkel <strong>Input</strong> fält som är då min switch! den är stylad när man klickar på den då blir den <strong>:checked</strong> alltså harjag använt en <strong>::before</strong> som gör själva stylingen för animationen med färg
        </p>
      </div>
    </div>
  )
}

export default Switch_demo
