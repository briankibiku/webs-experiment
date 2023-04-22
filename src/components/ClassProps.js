import React, { Component } from 'react'

class ClassProps extends Component {
  render() {
    return (
      <div>
        <b>Welcome to the passing prop component {this.props.name}</b>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default ClassProps