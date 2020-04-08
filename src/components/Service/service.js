import React, {useState} from 'react'
import myClass from './service.module.scss'
import SvgPath from '../svgPath/svgPath'
import ContentWrapper from '../../HOC/BodyWrapper/bodyWrapper';
import img_ from '../../images/graphics/photo_icon.png'
import iconItem from '../../images/Icons/icon.png'
import PopUp from '../../HOC/PopUp/popUp'

function Service(props) {
    const [modal, Setmodal] = useState(false);
  

    let ineractiveNavigation = null
    let styleWhite = null;
    let myModal = null;

    if(modal){
        myModal = <PopUp isGrooming={props.isGrooming} hidePopUp={() => SetModal()}/>
    }else {
        myModal = null
    }

    if (props.pageIndx === 1) {
        ineractiveNavigation = <SvgPath/>

    }else if (props.pageIndx === 2) {
        styleWhite = {backgroundColor: "white"};
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
     
       <div className={myClass.serviceWrapper} style={styleWhite}>
            {ineractiveNavigation}

            {myModal}
            <ContentWrapper>
             
                {/* This should class should be removed after I adjust size of SVG (I have to redo it in proper height/width ratio) */}
                <div className={myClass.serviceTemp}>
             
                    <div className={myClass.alignLeft}>
              
                 
                        <h1>{props.isGrooming ? "Grooming" : "Grooming Course"}</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur rerum quibusdam alias dolores. Ut tempora aut quis accusantium dolores nisi. Voluptates, excepturi? Aperiam, exercitationem voluptas.</p>
                        <div class={myClass.serviceItems}>
                            <p><img src={iconItem} alt="Blank"/><span></span><p>Service1</p></p>
                            <p><img src={iconItem} alt="Blank"/><span></span><p>Service1</p></p>
                            <p><img src={iconItem} alt="Blank"/><span></span><p>Service1</p></p>
                            <p><img src={iconItem} alt="Blank"/><span></span><p>Service1</p></p>
                        </div>
                       
                        <a onClick={() => SetModal()}>Leads to some CTA</a>
                    </div>
                
             
                   
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
