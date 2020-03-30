import React from 'react'
import TextField from '../../Components/TextField'

function InputField_demo() {
  return (
    <div>
      <div className="components">
        <label>not disabled</label>
        <TextField />

        <label>Is disabled</label>
        <div className="container-textField">
          <input type="text" disabled="disabled" className="input-textField" required />
          <span className="control-placeholder">Label</span>
          <span className="focus-border"></span>
        </div>
      </div>
      <div className="description">
        <h1>Förklaring</h1>
        <p>Jag har använt en <strong>div</strong> container för input fältet för att kunna välja storleken och positionen för min input fält! <br/> Sen har jag använt en <strong>input</strong> fält type text och <strong>label</strong> för att kunna kontrollera min placeholder så när jag fokuserar på själva input fältet så ska min label åka lite uppåt <br/> Och sist men inte minst, har skapat <strong>span</strong> som är då min border bottom effekt! Den funkar när jag klickar på input fältet och när jag fokuserar på den!</p>
      </div>
    </div>
  )
}

export default InputField_demo
