import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  

  genRow = (vals) => {

    console.log("vals", vals)

    return vals.map(eachVal => <Cell value={{eachVal}} /> )

  }
  

  genMatrix = () => {

    console.log("genMatrix", this.props.values)

    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
        <Cell />
      </div>
    )
  }
  
}

Matrix.defaultProps = {
    values : (() => {
      const defRow =  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ]
      return (new Array(10).fill(defRow))
    })()
}