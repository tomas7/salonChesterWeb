    import React, {useEffect, useState} from 'react'
import myClass from './landing.module.scss'
import BodyWrapper from '../../HOC/BodyWrapper/bodyWrapper'
// import avatarC from '../../images/gif/avatar_cloudy.gif'
// import avatarC_f from '../../images/gif/avatar_night.gif'
 import avatarS from '../../images/gif/avatar_sun.gif'
// import avatarR from '../../images/gif/avatar_rain.gif'
// import avatarN from '../../images/gif/avatar_night.gif'
// import avatarD from '../../images/gif/avatar_default.gif'
import avatarLow from '../../images/gif/Sequence 01.mp4'
import InteractiveNav from '../InteractiveNav/interactiveNav'
import InteractiveNav_mk1 from '../InteractiveNav/interactiveNav_mk1'
import MyButton from '../../UI/myButton/myButton'
import Axios from 'axios'
import scrollI from '../../images/Icons/Asset 37-80.jpg'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby"
import unixConverter from '../../Utils/unixToDate'
import Image from './landingImg'
const scrollToElement = require('scroll-to-element')



function Landing() {
    const [response, setresponse] = useState(null)
    // const [sunset, setsunset] = useState(null)
    // const [sunrise, setsunrise] = useState(null)
    const [day, setday] = useState(false)
    const [temp, settemp] = useState(null)

    let apiKey = "f38c60d22d169c8e99de854f1b63ddb2"
    
    let latAal = 57.0488;
    let lonAal = 9.9217;

    let latDk = 49.21;
    let lonDk = 19.3;

    useEffect(() => {
        //GET current time (date)
        var curTime = new Date()
        // fx. 8
        var curHours = curTime.getHours()
        var curMinutes = curTime.getMinutes()
        var formatedCurTime = `${curHours}:${curMinutes}`
 
        console.log("useEffect first")
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latAal}&lon=${lonAal}&appid=${apiKey}&units=metric`)
        .then(res => {
            console.log(res)
          const persons = res.data.weather[0].main;
        const sunset = res.data.sys.sunset
        const sunrise = res.data.sys.sunrise
        //fx. 20
        let convertedSunset = unixConverter(sunset)
        //fx. 6
        let convertedSunrise = unixConverter(sunrise)

        //do we have a day or night
        if (curHours >= convertedSunrise && curHours <= convertedSunset) {
            setday(true)
        }else {
            setday(false)
        }
        settemp (res.data.weather[0].temp);
         setresponse( persons );
         //IN case we need it to save as state for a future. For example if we want to check for it more frequently
         //  setsunset( convertedSunset );
         //   setsunrise( convertedSunrise );
        })
      
    }, [])

    //check if we should update state
    useEffect(() => {
        console.log("useEffect again")

        // console.log(sunrise)
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latAal}&lon=${lonAal}&appid=${apiKey}&units=metric`)
        .then(res => {
          const fullRes = res.data;
        console.log(fullRes)
        if (response === null || response === undefined) {
            return
        }else {
            if (response === fullRes.weather[0].main) {
                console.log("we have the same value")
                return;
            }else {
                
                setresponse( fullRes.weather[0].main );
            }
        } 
    })
    }, [response])

    const handleLinkClick = (e, target) => {
    
        // NODE-SAFE CODE
        // Gatsby uses Node to generate our pages. 
        // Node doesn't know what a window is. 
        // Be sure to wrap any of your browser interactions
        // in some sort of node-safe if statement like this:
        
     
            if (e) e.preventDefault()
            scrollToElement(target, {
              offset: -50, // Offset a fixed header if you please
              duration: 1000,
            })
          }
       

    // let avatar_ = avatarD

    // if (day) {
    //     switch (response) {
    //         case "Clouds":
    //         avatar_ = avatarC
    //             break;
    //         case "Rain":
    //         avatar_ = avatarR
    //             break;
    //         case "Clear":
    //         if (temp > 15) {
    //             avatar_ = avatarS
    //         }else {
    //             avatar_ = avatarD
    //         }
            
    //             break;
            
    //         default:
    //         avatar_ = avatarD
    //             break;
    //     }
    // }else {
    //     avatar_ = avatarN
    // }
   

    return (
        <section id="top" className={myClass.landingSec}>
  
            
                <div className={myClass.container}>
                    <div className={myClass.avatarWrapper}>
                    {/* <video  loop autoPlay muted
                        src={avatarLow}
                      >
                    </video>
                    */}
                        {/* <img src={avatar_} alt="Blank"/> */}
                         <h1>Welcome to Salon Chester</h1>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cum vero non, numquam maiores delectus.</p>
                    </div>
                    {/* <InteractiveNav/> */}
                    <div className={myClass.cta}>
                        <MyButton addClass="hunger" onclick={() => console.log()} text={"BOOK A TIME"}/>                 
                        <p>or</p>
                        <Link 
                         onClick={e => handleLinkClick(e, '#service')}
                     
                         to="/#service">
                        
                         <Image alt="Blank"/>
                        
                         </Link>
                        
                    </div>
                </div>        
           
        </section>
    )
}

export default Landing

