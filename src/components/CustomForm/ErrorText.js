import React from "react";

const Errortext = (props) => {
    return (
        <span className="error">
            {props.children}
        </span>
    )
}

export default Errortext;