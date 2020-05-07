import React, {useEffect, useState} from 'react'
import myClass from './landing.module.scss'
import BodyWrapper from '../../HOC/BodyWrapper/bodyWrapper'
import avatarC from '../../images/gif/n_cloudy.gif'
import avatarS from '../../images/gif/n_sun.gif'
import avatarR from '../../images/gif/n_rain.gif'
import avatarN from '../../images/gif/n_night.gif'
import avatarD from '../../images/gif/n_default.gif'
import InteractiveNav from '../InteractiveNav/interactiveNav'
import InteractiveNav_mk1 from '../InteractiveNav/interactiveNav_mk1'
import MyButton from '../../UI/myButton/myButton'
import Axios from 'axios'
import scrollI from '../../images/Icons/Asset 37-80.jpg'

import unixConverter from '../../Utils/unixToDate'

function Landing() {
    const [response, setresponse] = useState(null)
    // const [sunset, setsunset] = useState(null)
    // const [sunrise, setsunrise] = useState(null)
    const [day, setday] = useState(false)

    let apiKey = "f38c60d22d169c8e99de854f1b63ddb2"

    useEffect(() => {
        //GET current time (date)
        var curTime = new Date()
        // fx. 8
        var curHours = curTime.getHours()
        var curMinutes = curTime.getMinutes()
        var formatedCurTime = `${curHours}:${curMinutes}`

 
        console.log("useEffect first")
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=49.21&lon=19.3&appid=${apiKey}&units=metric`)
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

         setresponse( persons );
         //IN case we need it to save as state for a future. For example if we want to check for it more frequently
         //  setsunset( convertedSunset );
         //   setsunrise( convertedSunrise );
        })
      
    }, [])

    //check if we should update state
    useEffect(() => {
        console.log("useEffect again")
        console.log(day)
        // console.log(sunrise)
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=49.21&lon=19.3&appid=f38c60d22d169c8e99de854f1b63ddb2&units=metric`)
        .then(res => {
          const fullRes = res.data;
        if (response === null || response === undefined) {
            return
        }else {
            if (response === fullRes.weather[0].main) {
              
                return;
            }else {
        
                setresponse( fullRes );
            }
        } 
    })
    })

    let avatar_ = avatarD

    if (day) {
        switch (response) {
            case "Clouds":
            avatar_ = avatarC
                break;
            case "Rain":
            avatar_ = avatarR
                break;
            case "Clear":
            avatar_ = avatarS
                break;
            
            default:
            avatar_ = avatarD
                break;
        }
    }else {
        avatar_ = avatarN
    }
   

    return (
        <section id="top" className={myClass.landingSec}>
  
            
                <div className={myClass.container}>
                    <div className={myClass.avatarWrapper}>
                        <img src={avatar_} alt="Blank"/>
                         <h1>Welcome to Salon Chester</h1>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cum vero non, numquam maiores delectus.</p>
                    </div>
                    {/* <InteractiveNav/> */}
                    <div className={myClass.cta}>
                        <MyButton addClass="hunger" onclick={() => console.log()} text={"BOOK A TIME"}/>                 
                        <p>or</p>
                        <img src={scrollI} alt="Blank"/>
                    </div>
                </div>        
           
        </section>
    )
}

export default Landing

