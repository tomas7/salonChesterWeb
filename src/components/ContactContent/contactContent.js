import React, {useState, useEffect, useRef} from 'react'
import myClass from './contactContent.module.scss'
import bgImage from '../../images/graphics/Contact.png'
import Boubles from '../../components/Boubles/boubles'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import PopUp from '../../HOC/PopUp/popUp'

function ContactContent(props) {
    const [modal, Setmodal] = useState(false);

    useEffect(() => {
        
        return () => {
            clearAllBodyScrollLocks()
        }
    }, [])

    //using ref from another component
    const backdrop = useRef(null)
    let myModal = null;
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


    if(modal){
        myModal = <PopUp isGrooming={true} hidePopUp={() => SetModal()}/>
    }else {
        myModal = null
    }

    return (
        <>
        {myModal}
        <div className={myClass.contactWrapper}>
            <div className={myClass.textColumn}>
                <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolores quo, sapiente quisquam voluptatibus cumque consequatur dicta obcaecati modi exercitationem voluptas natus, quaerat quis nobis nulla quae odio, totam necessitatibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#Blank">Book a time or see our services</a>

            <h3>Get in touch</h3>
                <li>Renata Haverlova</li>
                <li>+421 901 570 141</li>
                <li>salonchester@gmail.com</li>
            </div>


            <div className={myClass.mapColumn}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.42572620101!2d19.290999651903537!3d49.211452779222085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715ae28a297ddbf%3A0x1cde0fd37dca2cb3!2s026%2001%20Doln%C3%BD%20Kub%C3%ADn%2C%20Slovakia!5e0!3m2!1sen!2sdk!4v1586264701195!5m2!1sen!2sdk" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        <div className={myClass.boubleWrapper}>
            <Boubles idx={props.pageIndx}
              bouble1c={props.bouble1c}
              bouble2c={props.bouble2c}
              boubleSVG={props.boubleSVG}
              isGrooming={props.isGrooming}
              boubleSVGTransform={props.boubleSVGTransform}
              wiggle={true}
              opacity="unset"
              isContact={true}
          
              opacity={0.2}
              openModal={() => SetModal()}
              maxWidth="unset"
              maxHeight="80%"
              minWidth="2500"
              />
       
        </div>
        </div>
        </>
    )
}

export default ContactContent
