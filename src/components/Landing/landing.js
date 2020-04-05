import React from 'react'
import myClass from './landing.module.scss'
import BodyWrapper from '../../HOC/BodyWrapper/bodyWrapper'
import avatar from '../../images/gif/Avatar.gif'
import InteractiveNav from '../InteractiveNav/interactiveNav'
import InteractiveNav_mk1 from '../InteractiveNav/interactiveNav_mk1'

function landing() {
    return (
        <section className={myClass.landingSec}>
  
            
                <div className={myClass.container}>
                    <div className={myClass.avatarWrapper}>
                        <img src={avatar} alt="Blank"/>
                         <h1>Welcome to Salon Chester</h1>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cum vero non, numquam maiores delectus.</p>
                        
                    </div>
               
                    <InteractiveNav/>
                        
                </div>        
                 
        </section>
    )
}

export default landing

