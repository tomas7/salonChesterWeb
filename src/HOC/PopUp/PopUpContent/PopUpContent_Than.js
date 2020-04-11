import React from 'react'
import myClass from './PopUpContent.module.scss'
import avatar from '../../../images/gif/Avatar.gif'

function PopUpContent_Than(props) {
    return (
        <>
        <div className={`${myClass.textWrapper} ${myClass.center}`}>
            <div className={myClass.avatar}>
                <img src={avatar} alt="Blank"/>
            </div>
            <div>
                <h1>Thank you!</h1>
                <p>{props.text.step3_t}</p>
            </div>

 
            {props.children}
     
        </div>
    </>
    )
}

export default PopUpContent_Than
