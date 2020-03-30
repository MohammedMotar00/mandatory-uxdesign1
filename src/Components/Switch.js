import React, { Component } from 'react'
import '../Css/Switch.css'

class Switch extends Component {
    render() {
        return (
            <div className="container">
                <input className="switch" disabled={this.props.disabled} type="checkbox" name="" />
            </div>
        )
    }
}

export default Switch
