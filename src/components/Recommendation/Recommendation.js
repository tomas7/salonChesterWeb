import React, {useState, useRef, useEffect} from 'react'
import {TimelineLite,TimelineMax, Power1} from "gsap/all"
import myClass from './Recommendation.module.scss'
import recI from '../../images/Icons/star_1.png'
import Dot from './RecommendationDot/RecommendationDot'

function Recommendation() {
    const [objArr, setobjArr] = useState(
        [{
            idx: 0,
            h1: "heading 1",
            t1: "Lorem ipsum dolor sit amet."
        },
        {
            idx: 1,
            h1: "heading 2",
            t1: "Lorem ipsum dolor sit amet2."
        },
        {
            idx: 2,
            h1: "heading 3",
            t1: "Lorem ipsum dolor sit amet23."
        }]
    )
    const [active, setactive] = useState(1)

    const wrapperAnim = useRef()

    let wrapper = null;

    useEffect(() => {
        wrapperAnim.current = new TimelineMax({ pause: true})
        
        .fromTo(wrapper, 0.5,{autoAlpha:1 ,ease: Power1.easeInOut},{autoAlpha:.5 , yoyo:true , ease: Power1.easeInOut},.0)

        .paused(true)
 
     
    }, [])

    // // useEffect(() => {
    // //     wrapperAnim.current.repeat(1).yoyo(true).play()
    // // })

    let upClass = null;
    let dot =   null
    let dots = []
    let select = (indx) => {
        wrapperAnim.current.repeat(1).yoyo(true).play()
        console.log(indx)
        setTimeout(() => {
            setactive(indx)
        }, 500);
       
        //need to restart it otherwise it will always playing
        wrapperAnim.current.restart()
    }
    let test = Object.keys(objArr).map(igKey => {
        return objArr[igKey]
    })

    objArr.forEach((element, idx) => {
    
        console.log(element)
        dot = 
        <Dot 
        key={idx}
        select={(idx) => select(idx)}
        active={active}
        idx={objArr[idx].idx}

       
    />

    dots.push(dot)
    });
    

    return (
        <div ref={div => wrapper = div}className={`${myClass.recommendationWrapper} shadow_discreet`}>
            <img src={recI} alt="Blank"/>
            <h2>{objArr[active].h1}</h2>
            <p>{objArr[active].t1}</p>
            <div>
            {dots}
            </div>       
 
        </div>
    )
}

export default Recommendation
