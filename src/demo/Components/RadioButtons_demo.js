import React, { useState } from 'react'
import RadioButtons from '../../Components/RadioButtons'

function RadioButtons_demo() {
  const [disabled, updateDisabled] = useState(false);

  return (
    <div>
      <div className="components">
        <RadioButtons disabled={disabled} />

        <label>check to disable your component!</label>
        <input
          type="checkbox"
          checked={disabled}
          onChange={() => updateDisabled(!disabled)}
        />
      </div>

      <div className="description">
        <p>
          skapade två <strong>divar</strong>. En div för varje <strong>radio button</strong>.
          Började med en <strong>Label</strong> som är <strong>position: relative</strong>, använder <strong>position: relative</strong> för att kunna använda min <strong>Span</strong> som kommer placeras inne i min <strong>label containern</strong>, den kommer visas när jag klickar på min <strong>input radio</strong>. <br/> Min label används som <strong>:hover</strong> och ändrar bakgrunds färgen! och när min <strong>input</strong> är checkad, så kommer <strong>span</strong> in som är <strong>position absolut</strong>, in i min radio button! <br/>
          För att de ska funka så måste min <strong>span</strong> stylas i <strong>:after</strong> och få lite fina effekter och storlek på själva markeringen och positionen!
        </p>
      </div>
    </div>
  )
}

export default RadioButtons_demo
