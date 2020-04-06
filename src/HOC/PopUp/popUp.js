import React from 'react';
import myClass from './popUp.module.scss';
import icon_ from '../../images/graphics/photo_icon.png'
import { Button, Progress } from 'semantic-ui-react'
import ProgressBar from '../../components/ProgressBar/prograssBar';

function popUp(props) {

    let hideModal = () => {
        alert("hide popup")
    }

    return (
        <>
        <div className={myClass.backdrop} onClick={props.hidePopUp}>
        </div>
     
        <div className={myClass.modalWrapper}>
     <ProgressBar/>
        <a onClick={props.hidePopUp}>X</a>
            <div className={myClass.textWrapper}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, nemo rerum consectetur similique blanditiis sunt perspiciatis excepturi aspernatur debitis dolores nisi facere aperiam. Rerum, blanditiis!</p>
    
            <div className={myClass.calendar}>

            </div>
            <button>NEXT</button>
            </div>
            <div className={myClass.imageWrapper}>
                <img src={icon_} alt="Blank"/>
            </div>
        </div>
      </>
    )
}

export default popUp
