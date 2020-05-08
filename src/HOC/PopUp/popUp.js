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

import Boubles from '../../components/Boubles/boubles'

import i_g1 from '../../images/graphics/GroomingForm1.png'
import i_g2_grad_sleeping from '../../images/graphics/Grad_sleeping_1.png'
import i_g2 from '../../images/graphics/GroomingForm2.png'
import i_c1 from '../../images/graphics/CoursesForm1.png'
import i_c1_pen from '../../images/graphics/Pen_1.png'
import i_c2 from '../../images/graphics/CoursesForm2.png'



function PopUp(props) {

  
    const containerAnim = useRef();
    const containerAnim_ = useRef();
    const refAnim = useRef();
    const refAnim_ = useRef();
    const refAnim2 = useRef();
    const refAnim2_ = useRef();
    const refAnim3 = useRef();
    const refAnim3_ = useRef();

    const refImg_g1Anim = useRef();
    const refImg_g1Anim_ = useRef();
    const refImg_c2Anim = useRef();
    const refImg_c2Anim_ = useRef();

    let container = null;
    let backdrop = null;
    let el = null;
    let el2 = null;
    let el3 = null;

    let img_g1 = null;
    let img_g2 = null;
    let img_c1 = null;
    let img_c2 = null;

    let i_g = <>              
    <img src={i_g1} alt="Blank"/>
    <img src={i_g2} alt="Blank"/>
    </>

    let sleepingSVG = "M724.67,486.45c-17.76,28.26-47.62,90.62-144.42,73.6S465.86,515.19,374,525.85s-201.13,30.49-248.79,13.62S67.29,480,107.57,421.87s30.36-56.43,36.31-86.78,82.14-126,177.3-86.81,59,42,154.75,48,211.92-7.44,245.53,59.57S742.43,458.19,724.67,486.45Z"
    let sleepingSVGTransfomr = "translate(82.57 -179.01)"

    let houseSVG = "M689.2,427c-17.7,38.86-52.77,68.22-92.25,84.48-36.68,15.11-76.67,19.73-116,25.28-26.29,3.71-228.4,40.35-228.4,40.35-31.45,4.43-64.84,5.42-93.56-8.16-45.25-21.39-68.27-80.57-49.37-126.92,9.11-22.35,26.1-40.74,35.59-62.93,12.85-30,10.88-63.95,12.3-96.58s7.92-68,32.38-89.62,60.9-23.8,92.69-16.5,61.08,22.68,92.12,32.69c84.19,27.14,180.1,14.63,257.94,56.65,18.21,9.83,35.11,22.68,47.3,39.4C705.15,339.66,706.9,388.16,689.2,427Z"
    let houseSVGTransfomr = "translate(03.04 -172.65)"

    let postSVG = "M673.51,543.82C635.44,596.9,550.25,635,475.16,626.68s-178-20.94-219.44-8.29-134.32-6.75-178.8-63.78-34.59-171-2.88-227S143.85,237,210.8,233s96.92,7.6,135.24,33.38,76.56,32.33,165.82,2.23S702.61,278.07,716.63,358,711.58,490.73,673.51,543.82Z"
    let postSVGTransfomr = "translate(46.84 -332.27)"

    let gradSleepingSVG = "M631.45,360.26c-1.47,25.87-33.84,72.41-46,93.5s-15.09,58.44-30,95.35S504,595.24,476.9,597s-108.21-3.51-149.23,21.53-71.9,24.61-105.29,20.21S176.24,610,176.24,610c-25-43.43-29.88-78.28-3.51-157.37s56.46-97.54,99.74-118.19,88.31-83,105.23-96,42.4-15.37,58.44-7,43.94,18,88.32,28.34,78.43,39.11,88.75,51S632.91,334.4,631.45,360.26Z"
    let gradSleepingSVGTransfomr = "translate(55.08 -256.57)"

    const [PB_Step, setPB_Step] = useState(1)
    const [fName, setfName] = useState(null)
    const [eMail, seteMail] = useState(null)
    const [breed, setBreed] = useState(null)
    const [msg, setMsg] = useState(null)

    //Display different set of images 
    if(props.isGrooming) {
        i_g = <>              
            <div ref={div => img_g1 = div}>
                <Boubles flatImg={i_c1}
                bouble1c="#4B738B"
                bouble2c="#88ACBC"
                boubleSVG={sleepingSVG}
                // isGrooming={props.isGrooming}
                boubleSVGTransform={sleepingSVGTransfomr}
                wiggle={false}
                scale={0.8}
                opacity={0.2}
                minWidth="1000"
                maxWidth="600px"
                maxHeight="50%"
                />
            </div>

            <div ref={div => img_g2 = div}>
                <Boubles flatImg={i_g2}
                bouble1c="#4B738B"
                bouble2c="#88ACBC"
                boubleSVG={houseSVG}
                // isGrooming={props.isGrooming}
                boubleSVGTransform={houseSVGTransfomr}
                wiggle={false}
                scale={0.8}
                opacity={0.2}
                minWidth="1000"
                maxWidth="unset"
                maxHeight="80%"
                />
            </div>
      
            </>
    }else {
        i_g = <>
           <div ref={div => img_g1 = div}>
                <Boubles flatImg={i_c1_pen}
                bouble1c="#F29F8D"
                bouble2c="#F27D72"
                boubleSVG={postSVG}
                // isGrooming={props.isGrooming}
                boubleSVGTransform={postSVGTransfomr}
                wiggle={false}
                scale={0.8}
                opacity={0.1}
                minWidth="1000"
                maxWidth="600px"
                maxHeight="60%"
                />
            </div>

            <div ref={div => img_g2 = div}>
                <Boubles flatImg={i_g2_grad_sleeping}
                bouble1c="#F29F8D"
                bouble2c="#F27D72"
                boubleSVG={gradSleepingSVG}
                // isGrooming={props.isGrooming}
                boubleSVGTransform={gradSleepingSVGTransfomr}
                wiggle={false}
                scale={0.8}
                opacity={0.1}
                minWidth="1800"
                   maxWidth="unset"
                   maxHeight="70%"
                />
            </div>
 
        </>
    }


    useEffect(()=> {


        containerAnim.current = new TimelineLite({ pause: true })
       .from(backdrop, .5,{autoAlpha:0},.0)
       .from(container, .5,{autoAlpha:0},.0)
       .from(el, 0.5, { x: 100, autoAlpha: 0, ease: Power1.easeInOut }, .2)
       .from(img_g1, 1, { autoAlpha: 0, ease: Power1.easeInOut }, .4)

       containerAnim_.current = new TimelineLite({ pause: true })
       .to(backdrop, .5,{autoAlpha:0},.0)
       .to(container, .5,{autoAlpha:0},.0)
       .to(img_g1, .5,{autoAlpha:0}, .0)
        .paused(true)
  
        refAnim.current = new TimelineLite({ pause: true })
        .from(el, 0.5, { x: 100, autoAlpha: 0, ease: Power1.easeInOut }, 0)
        .from(img_g1, 0.5, { autoAlpha: 0, ease: Power1.easeInOut }, .4)
        .paused(true)

        refAnim_.current = new TimelineLite({ pause: true })
        .to(el, 0.5, { x: -100, autoAlpha: 0, ease: Power1.easeInOut },0)
        .to(img_g1, 0.5, { autoAlpha: 0, ease: Power1.easeInOut }, .0)
        .paused(true)

        refAnim2.current = new TimelineLite({ pause: true })
        .from(el2, 0.5, { x: 100, autoAlpha: 0, ease: Power1.easeInOut }, .4)
        .from(img_g2, .5,{autoAlpha:0}, .4)
        .paused(true)

        refAnim2_.current = new TimelineLite({ pause: true })
        .to(el2, 0.5, { y: -100, autoAlpha: 0, ease: Power4.easeInOut }, 0)
        .to(img_g2, .5,{autoAlpha:0}, .0)
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
               {i_g}
            </div>
      
          
        </div>
      </>
    )
}

export default PopUp
