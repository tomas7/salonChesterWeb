import React, {useState} from 'react'
import myClass from './PopUpContent.module.scss'
import moment from 'moment';
import { isSameDay, startOfToday ,startOfTomorrow, endOfDay, getDaysInMonth } from 'date-fns'
import {subDays} from 'date-fns'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker-cssmodules.min.css"
import { getMinutes } from 'date-fns/esm';


function PopUpContent_Cal(props) {


    const [arrObj, setarrObj] = useState([{
        id:null,
        dates:[]
    }])

    let calculateMinTime = date => isSameDay(date, new Date()) ? new Date() : startOfToday()



    let endRes =  [
        new Date("April 9, 2020 15:00:00"),
        new Date("April 9, 2020 11:00:00"),
        new Date("April 10, 2020 14:00:00"),
        new Date("April 10, 2020 11:00:00"),
        new Date("April 10, 2020 15:00:00"),
        new Date("April 1, 2020 10:00:00")
    ]

    let filteredArr = [{
        id: 1,
        dates: []
    }]


    let testFun = () => {
    endRes.forEach((element, index) => {
        //get day
        let curDay = element.getDate()
        //get hour

        //is there element with id of curDay ?
        //no - create it 
        // if (filteredArr[curDay] === undefined ) {
        //     filteredArr.push(new Object({
        //         id:curDay,
        //         dates: filteredArr[curDay].dates.push(element)
        //     }))  

   
        // }
        //yes - skip

        if (arrObj[index] !== undefined) {
            setarrObj(arrObj =>{return {...arrObj, id:curDay, dates:element}} )
        }
      
    });}
    //get

    //get all days in current month 
    let daysInMonth = getDaysInMonth(new Date());
    
    //get current day in a number
    let curDayNum = startOfToday().getDate()

    //how many days left in a month
    let daysLeftInMonth = daysInMonth - curDayNum;

    const dates = [new Date("April 9, 2020 15:00:00"),new Date("April 9, 2020 11:00:00")]
    const dates2 = [new Date("April 10, 2020 11:00:00"),new Date("April 10, 2020 13:00:00")]

    let specificDateArr

 let testTime = "Apr 5, 2020 17:30 PM"

let myFun =()=> {
    testFun()

    console.log(arrObj)
}

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <>
             <div className={myClass.textWrapper}>
                <h1>{props.text.step1_h}</h1>
                <p>{props.text.step1_t}</p>
    
            <div className={myClass.calendar}>
            <div>
                <h3>Starting date:</h3>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    disablePast
            
                    minDate={startOfTomorrow()}
                    excludeDates={[new Date(), subDays(new Date(), 1)]}
                    showTimeSelect
                    excludeTimes={dates2}

                    excludeOutOfBOundsTimes
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
            </div>
         
            <div>
                <h3>Starting date:</h3>
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    showTimeSelect
                    excludeTimes={[
                        // event.setHours(event.setMinutes(new Date(), 0), 17),
                        // event.setHours(event.setMinutes(new Date(), 30), 18),
                        // event.setHours(event.setMinutes(new Date(), 30), 19),
                        // event.setHours(event.setMinutes(new Date(), 30), 17)
                    ]}
                    excludeDates={[new Date(), subDays(new Date(), 1)]}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    
                />
            </div>
          
            </div>
            {props.children}
            </div>

            
        </>
    )
}

export default PopUpContent_Cal
