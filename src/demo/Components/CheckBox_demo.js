import React, { useState } from 'react'
import Checkboxes from '../../Components/Checkboxes'

function CheckBox_demo() {
  const [value, updateValue] = useState("");
  const [disabled, updateDisabled] = useState(false);

  return (
    <div>
      <div className="components">
        <Checkboxes disabled={disabled} />

        <label>check to disable your component!</label>
        <input
          type="checkbox"
          checked={disabled}
          onChange={() => updateDisabled(!disabled)}
        />
      </div>
      <div className="description">
        <p>
          Har använt direkt en <strong>Label</strong> som är då själva checkbox container, den är då <strong>position: relative</strong>, de gör vi för att kunna style själva min check markering.  Med label så väljer jag olika stylings! <style>OCH</style> den viktigaste är att de används utav <strong>:hover</strong> och när <strong>Input fältet</strong> fokuseras, så ändras bakgrund färgen och när den blir <strong>:checked</strong>, får den en border som är då min <strong>span</strong>
        </p>
      </div>
    </div>
  )
}

export default CheckBox_demo
