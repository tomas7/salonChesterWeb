import React, {useState, useEffect, useRef} from 'react';
import myClass from './popUp.module.scss';
import icon_ from '../../images/graphics/photo_icon.png'
import cancel from '../../images/Icons/cancel.png';
import { Button, Progress } from 'semantic-ui-react'
import ProgressBar from '../../components/ProgressBar/prograssBar';
import MyButton from '../../UI/myButton/myButton';
import PopUpContetn_cal from './PopUpContent/PopUpContent_Cal'
import PopUpContetn_Form from './PopUpContent/PopUpContent_Form'
import PopUpContetn_Than from './PopUpContent/PopUpContent_Than'
import courseText from '../../assets/TextAssets/courseText'
import groomingText from '../../assets/TextAssets/groomingText'
import {Tween, Timeline, gsap} from 'react-gsap'
import { TimelineLite, Power1, Power4, TweenLite } from 'gsap/all';

function PopUp(props) {

  
    const containerAnim = useRef();
    const containerAnim_ = useRef();
    const refAnim = useRef();
    const refAnim_ = useRef();
    const refAnim2 = useRef();
    const refAnim2_ = useRef();
    const refAnim3 = useRef();
    const refAnim3_ = useRef();

    let container = null;
    let backdrop = null;
    let el = null;
    let el2 = null;
    let el3 = null;

    const [PB_Step, setPB_Step] = useState(1)
    const [fName, setfName] = useState(null)
    const [eMail, seteMail] = useState(null)
    const [breed, setBreed] = useState(null)
    const [msg, setMsg] = useState(null)

    useEffect(()=> {
        containerAnim.current = new TimelineLite({ pause: true })
       .from(backdrop, .5,{autoAlpha:0},.0)
       .from(container, .5,{autoAlpha:0},.0)
       .from(el, 0.5, { x: 100, autoAlpha: 0, ease: Power1.easeInOut }, .2)

       containerAnim_.current = new TimelineLite({ pause: true })
       .to(backdrop, .5,{autoAlpha:0},.0)
       .to(container, .5,{autoAlpha:0},.0)
        .paused(true)
  
        refAnim.current = new TimelineLite({ pause: true })
        .from(el, 0.5, { x: 100, autoAlpha: 0, ease: Power1.easeInOut }, 0)
        .paused(true)

        refAnim_.current = new TimelineLite({ pause: true })
        .to(el, 0.5, { x: -100, autoAlpha: 0, ease: Power1.easeInOut },0)
        .paused(true)

        refAnim2.current = new TimelineLite({ pause: true })
        .from(el2, 0.5, { x: 100, autoAlpha: 0, ease: Power1.easeInOut }, 0)
        .paused(true)

        refAnim2_.current = new TimelineLite({ pause: true })
        .to(el2, 0.5, { y: -100, autoAlpha: 0, ease: Power4.easeInOut }, 0)
        .paused(true)

        refAnim3.current = new TimelineLite({ pause: true })
        .from(el3, 0.5, { x: 100, autoAlpha: 0, ease: Power1.easeInOut }, 0.2)
        .paused(true)

        refAnim3_.current = new TimelineLite({ pause: true })
        .to(el3, 0.5, { y: 0, autoAlpha: 0, ease: Power1.easeInOut }, 0)
        .paused(true)
       

    }, [])

    let transitionCal = (reverse) => {
        if (reverse) {
            refAnim2.current.reverse()
            refAnim_.current.reverse().delay()
            
            decreasePB_Step()
        }else {
            refAnim_.current.play()
            refAnim2.current.play()

            increasePB_Step();
        }

    }
    let transitionFin = (reverse) => {
        if (reverse) {

            refAnim3_.current.play()
            containerAnim_.current.play().duration(1)

            setTimeout(() => {
                increasePB_Step();     
            }, 1500);
        
        }else {
            refAnim2_.current.play()
            refAnim3.current.play()
            increasePB_Step();
        }

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



    let textObj = null;

    if (props.isGrooming) {
        textObj = groomingText;
    }else {
        textObj = courseText;
    }


    // let popUpContent =  <PopUpContetn_cal text={textObj} isGrooming={props.isGrooming}>
                   
    //                <a className="captionStyle" onclick={props.hidePopUp}>CLOSEe</a>
    //                         <MyButton addClass="hope" onclick={() =>  transitionCal(false)} text={"NEXT"}/>
  
    //                     </PopUpContetn_cal>

    // if (PB_Step === 1) {
    //     popUpContent =  <PopUpContetn_cal text={textObj} isGrooming={props.isGrooming}>
    //                           <a className="captionStyle" onclick={props.hidePopUp}>CLOSEe</a>
    //                         <MyButton addClass="hope" onclick={() => transitionFin(false)} text={"NEXT"}/>
    //                     </PopUpContetn_cal>
    // }else if (PB_Step === 2) {
    //     popUpContent =  <PopUpContetn_Form text={textObj} isGrooming={props.isGrooming}
    //                     setfName={(e) => setfName_(e)}
    //                     seteMail={(e) => seteMail_(e)}
    //                     setfBreed={(e) => setfBreed_(e)}
    //                     setMsg={(e) => setMsg_(e)}
    //                     >
    //                         <MyButton addClass="unSure" onclick={() => decreasePB_Step()} text={"PREVIOUS"}/>
    //                         <MyButton addClass="hope" onclick={() => increasePB_Step()} text={"NEXT"}/>
    //                     </PopUpContetn_Form>
    // }else if (PB_Step === 3) {
    //     popUpContent =  <PopUpContetn_Than text={textObj}>

    //                         <MyButton  addClass="victory solo" onclick={() => transitionFin(true)} text={"CLOSE"}/>
    //                     </PopUpContetn_Than>
    // }


    return (
        <>
        <div  ref={div => backdrop = div} className={myClass.backdrop} onClick={props.hidePopUp}>
        </div>
     
        <div  ref={div => container = div} className={myClass.modalWrapper}>
            <ProgressBar step={PB_Step}/>   
       
        <a onClick={props.hidePopUp}><img src={cancel} alt="Bank"/></a>
            {/* {popUpContent} */}
            <div style={{position: "absolute"}} ref={div => el = div}>
                <PopUpContetn_cal text={textObj} isGrooming={props.isGrooming}>
                    <MyButton addClass="unSure" onclick={props.hidePopUp} text={"CLOSE"}/>
                    {/* <a className="captionStyle" onclick={props.hidePopUp}>CLOSE</a> */}
                    <MyButton addClass="hope" onclick={() =>  transitionCal(false)} text={"NEXT"}/>
                </PopUpContetn_cal>
            </div>
            <div style={{position: "absolute"}} ref={div => el2 = div}>
                <PopUpContetn_Form text={textObj} isGrooming={props.isGrooming}
                    setfName={(e) => setfName_(e)}
                    seteMail={(e) => seteMail_(e)}
                    setfBreed={(e) => setfBreed_(e)}
                    setMsg={(e) => setMsg_(e)}
                    >
                    <MyButton addClass="unSure" onclick={() =>  transitionCal(true)} text={"PREVIOUS"}/>
                    <MyButton addClass="hope" onclick={() => transitionFin(false)} text={"NEXT"}/>
                </PopUpContetn_Form>
            </div>
            <div style={{position: "absolute"}} ref={div => el3 = div}>
            <PopUpContetn_Than text={textObj}>

                <MyButton  addClass="victory solo" onclick={() => transitionFin(true)} text={"CLOSE"}/>
            </PopUpContetn_Than>
            </div>

          
        
            <div className={myClass.imageWrapper}>
                <img src={icon_} alt="Blank"/>
            </div>
      
          
        </div>
      </>
    )
}

export default PopUp
