import React, { Component } from 'react'
import '../Css/CheckBox.css';


class Checkboxes extends Component {
    render() {
        return (
            <label class="container-checkbox">
                <input type="checkbox" className="checkbox" />
                <span class="checkmark"></span>
            </label>
        )
    }
}

export default Checkboxes
