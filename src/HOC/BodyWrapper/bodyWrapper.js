import React from 'react'

function bodyWrapper(props) {
    let myStyle = {
        width:"80%",
        margin:"0 auto"
    }
    return (
        <div style={myStyle}>
            {props.children}
        </div>
    )
}

export default bodyWrapper
