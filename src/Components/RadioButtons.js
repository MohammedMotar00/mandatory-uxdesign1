import React, { Component } from 'react'
import '../Css/RadioButton.css';

class RadioButtons extends Component {
    render() {
        return (
            <div className="div-radio">
                <div className="div-radioButton1">
                    <label className="container-radio">
                        <input type="radio" disabled={this.props.disabled} name="radio" className="radioButton" />
                        <span className="checkmark-radio"></span>
                    </label>
                </div>

                <div className="div-radioButton2">
                    <label className="container-radio">
                        <input type="radio" disabled={this.props.disabled} name="radio" className="radioButton" />
                        <span className="checkmark-radio"></span>
                    </label>
                </div>
            </div>
        )
    }
}

export default RadioButtons
