import React, { Component } from 'react'
import '../Css/InputFiled.css';

class TextField extends Component {
    render() {
        return (
            // <div>
            //     <label data-placeholder="Name">
            //         <input type="text" className="clicked" />
            //     </label>
            // </div>
            <div className="clicked" data-placeholder="s">
                <input type="text" />
            </div>
        )
    }
}

export default TextField
