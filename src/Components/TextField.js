import React, { Component } from 'react'
import '../Css/InputFiled.css';

class TextField extends Component {
    render() {
        return (
            <div className="container-textField">
                <input type="text" className="input-textField" required />
                <span className="control-placeholder">Label</span>
                <span className="focus-border"></span>
            </div>
        )
    }
}



export default TextField