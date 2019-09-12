import React, { Component } from "react";

class ClassComponent extends Component {

    state = {
        name: "Gianluca"
    }

    render() {
        return (
            <div>
                <h1> hi my name is: {this.state.name}</h1>
                <h2> with property: {this.props.name}</h2>
            </div>
        );
    }
}
ClassComponent.propTypes {
    name: propTypes.string;
};
export default ClassComponent;