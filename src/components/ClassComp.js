import React from "react";
import UpdatedComp from "./HigherOrder";

class ClassComp extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }
    IncreamentCount = () => {
        this.setState({ count: this.state.count + 1})
    }
    render() {
        const {count} = this.state
        return(
            <div>
                <h1>I am a class component</h1>
                <button onClick={this.IncreamentCount}>{this.props.name} Button clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComp(ClassComp);