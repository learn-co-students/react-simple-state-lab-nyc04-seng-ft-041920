import React, {Component} from 'react'

export default class Cell extends React.Component {


    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render (){

        console.log(this.props)

        // const row = this.props.map((eachRow) => {
        //  const col = eachRow.map((eachCol) => 
        //     console.log("EACHCOLL", eachCol)
        //  )
        // }
        
    

        return (
            <div 
                className="cell"
                style={{backgroundColor: this.state.color}}
                onClick={this.handleClick}>
            </div>
        )
    }
}