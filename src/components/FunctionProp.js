import React from "react";

function FunctionProp(props) {
    return (
        <>
            <h3>This is a function component</h3>
            <h3>Hello {props.name}, Welcome to Simplilearn {props.place} center</h3>
        </>
    )
}

export default FunctionProp