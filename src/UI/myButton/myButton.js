import React from 'react'
import myClass from './myButton.module.scss'

function myButton(props) {
    return (
        <button className={`${myClass.myButtonClass} ${props.addClass}`} onClick={props.onclick}>{props.text}</button>
    )
}

export default myButton
