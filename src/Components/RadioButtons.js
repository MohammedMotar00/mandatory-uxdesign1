import React, { Component } from 'react'
import '../Css/RadioButton.css';

class RadioButtons extends Component {
    render() {
        return (
            <>
            <label class="container-radio">
                <input type="radio" name="radio" className="radioButton" />
                <span class="checkmark-radio"></span>
            </label>
            <br/>
            <label class="container-radio">
                <input type="radio" name="radio" className="radioButton" />
                <span class="checkmark-radio"></span>
            </label>
            </>
        )
    }
}

export default RadioButtons
