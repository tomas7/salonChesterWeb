import React, {useEffect, useState} from 'react'
import myClass from './landing.module.scss'
import BodyWrapper from '../../HOC/BodyWrapper/bodyWrapper'
import avatarC from '../../images/gif/n_cloudy.gif'
import avatarS from '../../images/gif/n_sun.gif'
import avatarR from '../../images/gif/n_rain.gif'
import InteractiveNav from '../InteractiveNav/interactiveNav'
import InteractiveNav_mk1 from '../InteractiveNav/interactiveNav_mk1'
import MyButton from '../../UI/myButton/myButton'
import Axios from 'axios'

function Landing() {
    const [response, setresponse] = useState(null)
    const [sunset, setsunset] = useState(null)
    const [sunrise, setsunrise] = useState(null)
    const [day, setday] = useState(false)
    let weatherResponse;
    let apiKey = "f38c60d22d169c8e99de854f1b63ddb2"

    let testFun = (unix) => {
        let unix_timestamp = unix
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();
        
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        var testDate = new Date(formattedTime)
        console.log(typeof(testDate))
        console.log(testDate)
        return formattedTime
    }

    var curTime = new Date()

    var curHours = curTime.getHours()
    var curMinutes = curTime.getMinutes()

    var formatedCurTiem = `${curHours}:${curMinutes}`

    useEffect(() => {
        var curTime = new Date()

        var curHours = curTime.getHours()
        var curMinutes = curTime.getMinutes()
    
        var formatedCurTime = `${curHours}:${curMinutes}`

        console.log("useEffect first")
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=49.21&lon=19.3&appid=f38c60d22d169c8e99de854f1b63ddb2&units=metric`)
        .then(res => {
            console.log(res)
          const persons = res.data.weather[0].main;
        const sunset = res.data.sys.sunset
        const sunrise = res.data.sys.sunrise
        let convertedSunset = testFun(sunset)
        let convertedSunrise = testFun(sunrise)
          setresponse( persons );
           setsunset( convertedSunset );
        //   setsunrise( convertedSunrise );
     

        })
      
    }, [])

    useEffect(() => {
        console.log("useEffect again")
        console.log(typeof(sunset))
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

    let avatar_ = null

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
        avatar_ = avatarS
            break;
    }
   

    return (
        <section id="top" className={myClass.landingSec}>
  
            
                <div className={myClass.container}>
                    <div className={myClass.avatarWrapper}>
                        <img src={avatar_} alt="Blank"/>
                         <h1>Welcome to Salon Chester</h1>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cum vero non, numquam maiores delectus.</p>
                        <p>{`weather is : ${response}`}</p>
                      
                    </div>
               
               
                    {/* <InteractiveNav/> */}
                    <div className={myClass.cta}>
                        <MyButton addClass="hunger" onclick={() => console.log()} text={"BOOK A TIME"}/>
                        <button onClick={() => testFun()}>d</button>
                        <p>or</p>
                        <h2>Scroll</h2>
                    </div>
                </div>        
           
        </section>
    )
}

export default Landing

