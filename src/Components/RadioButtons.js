import React, { Component } from 'react'
import '../Css/RadioButton.css';

class RadioButtons extends Component {
    render() {
        return (
            <div className="div-radio">
            <div className="div-radioButton1">
                <label class="container-radio">
                    <input type="radio" name="radio" className="radioButton" />
                    <span class="checkmark-radio"></span>
                </label>
            </div>

            <div className="div-radioButton2">
                <label class="container-radio">
                    <input type="radio" name="radio" className="radioButton" />
                    <span class="checkmark-radio"></span>
                </label>
            </div>
            </div>
        )
    }
}

export default RadioButtons
