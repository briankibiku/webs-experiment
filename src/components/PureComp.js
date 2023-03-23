import { PureComponent } from "react";

class PureComp extends PureComponent {
    render() {
        console.log('Pure comp render')
        return (
            <div>I am a pure compopnent {this.props.name}</div>
        )
    }
}

export default PureComp