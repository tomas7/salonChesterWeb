import React, {useState} from 'react'
import myClass from './Recommendation.module.scss'
import recI from '../../images/Icons/recommendation.png'
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

    let dot =   null
    let dots = []
    let select = (indx) => {
        console.log(indx)
        setactive(indx)
    }
    let test = Object.keys(objArr).map(igKey => {
        return objArr[igKey]
    })

    objArr.forEach((element, idx) => {
        console.log(element)
        dot = 
        <Dot 
        select={(idx) => select(idx)}
        active={active}
        idx={objArr[idx].idx}
    />

    dots.push(dot)
    });
    

    return (
        <div className={`${myClass.recommendationWrapper} shadow_discreet`}>
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
