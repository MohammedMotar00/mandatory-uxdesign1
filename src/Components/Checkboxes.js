import React, { Component } from 'react'
import '../Css/CheckBox.css';


class Checkboxes extends Component {
    render() {
        return (
            <label className="container-checkbox">
                <input type="checkbox" disabled={this.props.disabled} className="checkbox" />
                <span className="checkmark"></span>
            </label>
        )
    }
}

export default Checkboxes
