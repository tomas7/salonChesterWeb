import React, {useState} from 'react';
import myClass from './popUp.module.scss';
import icon_ from '../../images/graphics/photo_icon.png'
import { Button, Progress } from 'semantic-ui-react'
import ProgressBar from '../../components/ProgressBar/prograssBar';
import MyButton from '../../UI/myButton/myButton';
import PopUpContetn_cal from './PopUpContent/PopUpContent_Cal'
import PopUpContetn_Form from './PopUpContent/PopUpContent_Form'
import PopUpContetn_Than from './PopUpContent/PopUpContent_Than'
import courseText from '../../assets/TextAssets/courseText'
import groomingText from '../../assets/TextAssets/groomingText'

function PopUp(props) {

    const [PB_Step, setPB_Step] = useState(1)
    const [fName, setfName] = useState(null)
    const [eMail, seteMail] = useState(null)
    const [breed, setBreed] = useState(null)
    const [msg, setMsg] = useState(null)

    //check if valid imputs
    //send email

    let setfName_ = (e) => {
        const val = e.target.value

        setfName(val)
    }

    let seteMail_ = (e) => {
        const val = e.target.value

        seteMail(val)
    }

    let setfBreed_ = (e) => {
        const val = e.target.value

        setBreed(val)
    }

    let setMsg_ = (e) => {
        const val = e.target.value

        setMsg(val)
    }

    let increasePB_Step = () => {
        if (PB_Step !== 3) {
            setPB_Step(PB_Step + 1);
        }
       else {
             props.hidePopUp()
       }
    }

    let decreasePB_Step = () => {
        if (PB_Step !== 1) {
            setPB_Step(PB_Step - 1);
        }
       else {
           console.log("You can't go any lower")
       }
    }

    let textObj = null;

    if (props.isGrooming) {
        textObj = groomingText;
    }else {
        textObj = courseText;
    }


    let popUpContent =  <PopUpContetn_cal text={textObj} isGrooming={props.isGrooming}>
                            <MyButton addClass="hope" onclick={() => decreasePB_Step()} text={"PREVIOUS"}/>
                            <MyButton addClass="unSure" onclick={() => increasePB_Step()} text={"NEXT"}/>
  
                        </PopUpContetn_cal>

    if (PB_Step === 1) {
        popUpContent =  <PopUpContetn_cal text={textObj} isGrooming={props.isGrooming}>
                            <MyButton addClass="hope" onclick={() => decreasePB_Step()} text={"PREVIOUS"}/>
                            <MyButton addClass="unSure" onclick={() => increasePB_Step()} text={"NEXT"}/>
                        </PopUpContetn_cal>
    }else if (PB_Step === 2) {
        popUpContent =  <PopUpContetn_Form text={textObj} isGrooming={props.isGrooming}
                        setfName={(e) => setfName_(e)}
                        seteMail={(e) => seteMail_(e)}
                        setfBreed={(e) => setfBreed_(e)}
                        setMsg={(e) => setMsg_(e)}
                        >
                            <MyButton addClass="hope" onclick={() => decreasePB_Step()} text={"PREVIOUS"}/>
                            <MyButton addClass="unSure" onclick={() => increasePB_Step()} text={"NEXT"}/>
                        </PopUpContetn_Form>
    }else if (PB_Step === 3) {
        popUpContent =  <PopUpContetn_Than text={textObj}>

                            <MyButton  addClass="victory" onclick={props.hidePopUp} text={"CLOSE"}/>
                        </PopUpContetn_Than>
    }


    return (
        <>
        <div className={myClass.backdrop} onClick={props.hidePopUp}>
        </div>
     
        <div className={myClass.modalWrapper}>
            <ProgressBar step={PB_Step}/>
        <a onClick={props.hidePopUp}>X</a>
            {popUpContent}
        
            <div className={myClass.imageWrapper}>
                <img src={icon_} alt="Blank"/>
            </div>
            <button onClick={() => console.log(fName + eMail + breed + msg)}>click</button>
        </div>
      </>
    )
}

export default PopUp
