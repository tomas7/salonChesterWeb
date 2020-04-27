import React, {useState} from 'react'
import myClass from './service.module.scss'
import SvgPath from '../svgPath/svgPath'
import ContentWrapper from '../../HOC/BodyWrapper/bodyWrapper';
import img_ from '../../images/graphics/photo_icon.png'
import MyButton from '../../UI/myButton/myButton'
import iconItem from '../../images/Icons/icon.png'
// import iconItem1 from '../../images/Icons/Asset 20.png'
// import iconItem2 from '../../images/Icons/Asset 21.png'
// import iconItem3 from '../../images/Icons/Asset 22.png'
// import iconItem4 from '../../images/Icons/Asset 26.png'
// import iconItem5 from '../../images/Icons/Asset 24.png'
// import iconItem6 from '../../images/Icons/Asset 25.png'

import iconItem1 from '../../images/Icons/i_1.png'
import iconItem2 from '../../images/Icons/i_2.png'
import iconItem3 from '../../images/Icons/i_3.png'
import iconItem4 from '../../images/Icons/i_4.png'
import iconItem5 from '../../images/Icons/i_5.png'
import iconItem6 from '../../images/Icons/i.png'
import PopUp from '../../HOC/PopUp/popUp'
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


function Service(props) {
    const [modal, Setmodal] = useState(false);
  

    let ineractiveNavigation = null;
    let icons = null;
    let shadow = null;
    let styleWhite = null;
    let myModal = null;
    let modalButtonText = "BOOK A TIME"
  

    if(modal){
        myModal = <PopUp isGrooming={props.isGrooming} hidePopUp={() => SetModal()}/>
    }else {
        myModal = null
    }

    if (props.pageIndx === 1) {
        ineractiveNavigation = <SvgPath/>
        icons =   
        <div class={myClass.serviceItems}>
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
            Setmodal(true)
        }else {
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

                    {/* <div style={props.pageIndx === 2 ? {marginTop: "000px"} : {marginTop: "0px"}} className={`${myClass.alignLeft}`}>
              
                 
                        <h1>{props.isGrooming ? "Grooming" : "Grooming Course"}</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur rerum quibusdam alias dolores. Ut tempora aut quis accusantium dolores nisi. Voluptates, excepturi? Aperiam, exercitationem voluptas.</p>
                        <div class={myClass.serviceItems}>
                            <span>
                                <p>Ear Cleaning</p>
                                <img src={iconItem1} alt="Blank"/>
                            </span>
                            <span>
                                <p>Grooming</p>
                                <img src={iconItem2} alt="Blank"/>
                            </span>
                            <span>
                                <p>Cutting</p>
                                <img src={iconItem3} alt="Blank"/>
                            </span>
                            <span>
                                <p>Nail Clipping</p>
                                <img src={iconItem4} alt="Blank"/>
                            </span>
                            <span>
                                <p>Bath</p>
                                <img src={iconItem5} alt="Blank"/>
                            </span>
                            <span>
                                <p>Trimming</p>
                                <img src={iconItem6} alt="Blank"/>
                            </span>
                        </div>
                        
                        <a className="captionStyle" onClick={() => SetModal()}>Book a time</a>
                    </div> */}
                    
                
             
                   
                </div>

         
            </ContentWrapper>
            <div className={myClass.alignRight}>
                <img src={img_} alt="Blank"/>
            </div>
        </div>
        </>
    
    )
}

export default Service
