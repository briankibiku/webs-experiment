import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('Reg comp render')
    return (
      <div>I am the RegComp {this.props.name}</div>
    )
  }
}

export default RegComp