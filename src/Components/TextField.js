import React, { Component } from 'react'
import '../Css/InputFiled.css';

class TextField extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            clicked: false
        }

        this.onClick = React.createRef();
    }

    componentDidMount(){
        document.addEventListener('click', this.clickOutsideOfInput)
    }

    componentWillUnmount(){
        document.addEventListener('click', this.clickOutsideOfInput)
    }

    clickOutsideOfInput = (e) =>{
        let Class = '';
        // console.log(e.target, 'hej');
        console.log(this.onClick.current);
        if(this.onClick.current === e.target){
            this.setState({clicked: !this.state.clicked})
            console.log('true');
            Class = 'clicked'
        }
        else {
        this.setState({clicked: false})
        console.log('false');
        Class = ''
        }
    }

    render() {
        const { clicked } = this.state;

        return (
            <div className={Class} data-placeholder="Name">
                <input type="text" className={Class} ref={this.onClick} onClick={this.clickOutsideOfInput} />
            </div>
        )
    }
}

export default TextField
