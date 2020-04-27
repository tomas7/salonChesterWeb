import React from 'react'
import myClass from './landing.module.scss'
import BodyWrapper from '../../HOC/BodyWrapper/bodyWrapper'
import avatar from '../../images/gif/Avatar.gif'
import InteractiveNav from '../InteractiveNav/interactiveNav'
import InteractiveNav_mk1 from '../InteractiveNav/interactiveNav_mk1'
import MyButton from '../../UI/myButton/myButton'

function landing() {
    return (
        <section id="top" className={myClass.landingSec}>
  
            
                <div className={myClass.container}>
                    <div className={myClass.avatarWrapper}>
                        <img src={avatar} alt="Blank"/>
                         <h1>Welcome to Salon Chester</h1>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cum vero non, numquam maiores delectus.</p>
                        
                    </div>
               
                    {/* <InteractiveNav/> */}
                    <div className={myClass.cta}>
                        <MyButton addClass="hunger" onclick={() => console.log()} text={"BOOK A TIME"}/>
            
                        <p>or</p>
                        <h2>Scroll</h2>
                    </div>
                </div>        
           
        </section>
    )
}

export default landing

