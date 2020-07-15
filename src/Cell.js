import React, { Component } from 'react';
const events = require ('events');

export default class Cell extends Component {
    constructor(props){
        super()
        
        this.state = {
            color: props.value
        }
    }

    clickFunction = () => {
        // this.setState.color = '#333';
        this.setState({
            color : '#333'
        });
    };

    render(){
        // console.log(this.clickEvent);
        console.log(this.state)
        return(
            <div
                className="cell"
                style={{backgroundColor: this.state.color}}
                onClick={this.clickFunction}    
            >

            </div>
        )
    }
}