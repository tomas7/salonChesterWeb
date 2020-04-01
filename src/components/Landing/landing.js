import React from 'react'
import myClass from './landing.module.scss'
import BodyWrapper from '../../HOC/BodyWrapper/bodyWrapper'
import avatar from '../../images/gif/Avatar.gif'

function landing() {
    return (
        <div className={myClass.landingWrapper}>
            <BodyWrapper>
                <div className={myClass.avatarWrapper}>
                    <img src={avatar} alt="Blank"/>
                </div>
            </BodyWrapper>
        </div>
    )
}

export default landing
