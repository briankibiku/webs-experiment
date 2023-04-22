import React, { Component } from 'react'
import bellA from './bell (1).png'
import bellB from './bell (2).png'

class NewComp extends Component {
    constructor(props) {
      super(props)

      this.state = {
         message:' Please subscribe to Simplilearn',
         sub: 'Subscribe',
         imageUrl: bellA
      }
    }
    styles = {
        color: 'purple',
        fontStyle: 'italic'

    }

    ButtonChange = () => {
        this.setState({
            message: 'Hit the bell icon to never miss an update',
            sub: 'Subscribed',
        })
    }

    imageChange = () => {
        this.setState({
            message: 'Thank you, happy learning',
            imageUrl: bellB
        })
    }

  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p>
            <img src={this.state.imageUrl} onClick={this.imageChange} style={{width: "30px", height: '30px'}}  alt='bell'/>
        </p>
      </div>
    )
  }
}

export default NewComp