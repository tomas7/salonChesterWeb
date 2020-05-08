import React, {useState, useEffect, useRef} from 'react'
import myClass from './service.module.scss'
import SvgPath from '../svgPath/svgPath'
import ContentWrapper from '../../HOC/BodyWrapper/bodyWrapper';
import img_ from '../../images/graphics/photo_icon.png'
import MyButton from '../../UI/myButton/myButton'
import iconItem from '../../images/Icons/icon.png'
import { TimelineLite, Power1, Power4, TweenLite, TimelineMax, CustomWiggle, CustomEase, Bounce } from 'gsap/all';
// import iconItem1 from '../../images/Icons/Asset 20.png'
// import iconItem2 from '../../images/Icons/Asset 21.png'
// import iconItem3 from '../../images/Icons/Asset 22.png'
// import iconItem4 from '../../images/Icons/Asset 26.png'
// import iconItem5 from '../../images/Icons/Asset 24.png'
// import iconItem6 from '../../images/Icons/Asset 25.png'

import getRandom from '../../Utils/RandomizeBetween'

import iconItem1 from '../../images/Icons/i_1.png'
import iconItem2 from '../../images/Icons/i_2.png'
import iconItem3 from '../../images/Icons/i_3.png'
import iconItem4 from '../../images/Icons/i_4.png'
import iconItem5 from '../../images/Icons/i_5.png'
import iconItem6 from '../../images/Icons/i.png'
import PopUp from '../../HOC/PopUp/popUp'

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import groomingImg from '../../images/graphics/GroomingM.png'
import coursesImg from '../../images/graphics/CourseM.png'
import { TweenMax } from 'gsap/gsap-core';

import Boubles from '../../components/Boubles/boubles'
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


function Service(props) {
    const [modal, Setmodal] = useState(false);

    useEffect(() => {
        
        return () => {
            clearAllBodyScrollLocks()
        }
    }, [])

    let ineractiveNavigation = null;
    let icons = null;
    let shadow = null;
    let styleWhite = null;
    let myModal = null;
    let modalButtonText = "BOOK A TIME"

    //using ref from another component
    const backdrop = useRef(null)

    if(modal){
        myModal = <PopUp isGrooming={props.isGrooming} hidePopUp={() => SetModal()}/>
    }else {
        myModal = null
    }

    if (props.pageIndx === 1) {
        ineractiveNavigation = <SvgPath/>
        icons =   
        <div className={myClass.serviceItems}>
            <h2>Our services:</h2>
            <div >
                <span>
                    <img src={iconItem2} alt="Blank"/>
                    <p>Grooming</p>
                </span>
                <span>
                    <img src={iconItem5} alt="Blank"/>
                    <p>Cutting</p>
                </span>
                <span>
                    <img src={iconItem3} alt="Blank"/>
                    <p>Nail Clipping</p>
                </span>
                <span>
                    <img src={iconItem4} alt="Blank"/>
                    <p>Trimming</p>
                </span>
                <span>
                    <img src={iconItem6} alt="Blank"/>
                    <p>Ear Cleaning</p>
                </span>
                <span>
                    <img src={iconItem1} alt="Blank"/>
                    <p>Bath</p>
                </span>
            </div>
        
        </div>

    }else if (props.pageIndx === 2) {
        styleWhite = {backgroundColor: "white"};
        modalButtonText = "BOOK A DATE"
    }

    let SetModal = () => {
        if (!modal) {
            //disable except targeted element
            disableBodyScroll(backdrop);
            Setmodal(true)
        }else {
            //enabled except targeted element
            enableBodyScroll(backdrop);
            Setmodal(false)
        }
    }


    return (
        <>
     
       <div id={props.pageIndx === 1 ? "service" : null} className={`${myClass.serviceWrapper}  ${props.pageIndx === 2 ? "shadow" : ""}`} style={styleWhite}>
            {ineractiveNavigation}

            {myModal}
            <ContentWrapper>
             
                {/* This should class should be removed after I adjust size of SVG (I have to redo it in proper height/width ratio) */}
                <div className={myClass.serviceTemp}>
             
                    <div style={props.pageIndx === 2 ? {marginTop: "000px"} : {marginTop: "0px"}} className={`${myClass.alignLeft}`}>
                   
                 
                        <h1>{props.isGrooming ? "Grooming" : "Grooming Course"}</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur rerum quibusdam alias dolores. Ut tempora aut quis accusantium dolores nisi. Voluptates, excepturi? Aperiam, exercitationem voluptas.</p>
                        {icons}
                       
                      
                        <MyButton addClass="hunger" onclick={() => SetModal()} text={modalButtonText}/>
                    </div>
  
                </div>
           
         
            </ContentWrapper>
            <div className={props.isGrooming ? `${myClass.alignRight}` : `${myClass.alignRight} ${myClass.large}`}>
              <Boubles flatImg={props.flatImg}
              bouble1c={props.bouble1c}
              bouble2c={props.bouble2c}
              boubleSVG={props.boubleSVG}
              isGrooming={props.isGrooming}
              boubleSVGTransform={props.boubleSVGTransform}
              wiggle={true}
              opacity="unset"

              openModal={() => SetModal()}
              />
              
            </div>
        </div>
        </>
    
    )
}

export default Service
