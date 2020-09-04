import React from 'react'
import { render } from 'enzyme'


class Cell extends React.Component{


    constructor(props) {
    super()
    this.state = {color: props.value} // ...define initial state with a key of 'color' set to the 'value' prop
  }


handleClick = () => {
    this.setState({color: '#333'})
}

render() {
    return(
        <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}></div>
    )
}
}

export default Cell
