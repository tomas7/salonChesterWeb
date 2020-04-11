import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import myClass from './nav.module.scss'
import {TransitionLink, TransitionState }from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo_text from '../../../images/logo/Logo_Text.png'
import logo_icon from '../../../images/logo/Logo_Icon.png'
import hamI from '../../../assets/hamI'
import colors from '../../../global/colors.scss'


function Nav(props) {
    const [wide, setwide] = useState(false)
    const [open, setopen] = useState(false)
    const [navActive, setnavActive] = useState(false)

    useEffect(() => {
  
      
        window.addEventListener('scroll', listenToScroll);
   window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener('scroll', listenToScroll);
          window.removeEventListener("resize", resize);
        }
    }, [])

    let colorObj = {
        colorMainBlue: "#4B738B",
        colorSideBlue: "#88ACBC",
    
        secondaryBody: "#F29F8D",
        secondaryPink: "#F27D72",
    
        whiteNegative: "#F5F2F1"

    }

    const scrollPoint = 0.2;  

    let resize = () => {
        let currentHideNav = (window.innerWidth <= 900);
      console.log(currentHideNav)
        if (currentHideNav !== wide) {
            setopen(true);
            console.log("smaller")
        }else {
            setopen(false)
        }
    }
   

    let listenToScroll = () => {
        const scrollWin = document.body.scrollTop || document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        const scrolled = scrollWin / height

        if (scrolled > scrollPoint){
            console.log("bellowe")
            setnavActive(true)
            
        }else {
            console.log("above")
            setnavActive(false)
        }
        
    }
 

    return (
        <>
        <nav className={navActive ? myClass.scrolled : null}>
        <div>
        <div onClick={()=>setopen(!open)} className={myClass.hamI}>
                    {hamI}
                </div>
            <ul>
            {/* <AniLink paintDrip duration={1} to="TestPage">
                Test Transition
            </AniLink> */}
              
               
              <li className={!open ? null : myClass.hide}> 
                    <AniLink 
                        cover  
                        to="/#top"   
                        direction="left"
                        duration={1}
                        bg="
                        
                            fixed            /* attachment */
                            padding-box      /* origin */
                            content-box      /* clip */
                        
                        "bg={colorObj.colorMainBlue}>
                            Home
                    </AniLink >

                </li>
                 
               
                <li className={!open ? null : myClass.hide}>  <AnchorLink to="/#service">Services</AnchorLink></li>
                <li className={open ? null : myClass.hide} className={navActive ? null : myClass.center}>
                <div style={navActive ? {left: "5px"} : {left: "0px"}} className={myClass.navLogoWrapper}>
                <AnchorLink to="/#top">
                    <img className={navActive ? myClass.iconActive : null} src={logo_icon} alt="Blank"/>    
                    <img className={navActive ? myClass.textActive : null} src={logo_text} alt="Blank"/>
                </AnchorLink> 
                </div>
                </li>        
                <li className={!open ? null : myClass.hide}>    
                    <AniLink 
                        cover  
                        to="/gallery"   
                        direction="right"
                        duration={1}
                       bg={colorObj.colorSideBlue}>
                            Gallery
                    </AniLink >
                </li>
                 
                <li className={!open ? null : myClass.hide}>  
                    <AniLink 
                        cover  
                        to="/contact"   
                        direction="right"
                        duration={1}
                      bg={colorObj.secondaryPink}>
                            Contact
                    </AniLink >
                </li>
            </ul>
        
        </div>
     
        </nav>
        
        </>
    )
}

export default Nav
