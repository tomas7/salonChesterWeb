import React, {useState} from 'react'
import myClass from './Recommendation.module.scss'
import recI from '../../images/Icons/recommendation.png'
import Dot from './RecommendationDot/RecommendationDot'

function Recommendation() {
    const [state, setstate] = useState(initialState)
    return (
        <div className={`${myClass.recommendationWrapper} shadow_discreet`}>
            <img src={recI} alt="Blank"/>
            <h2>Recommendation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt nobis itaque nisi, repellendus doloremque placeat soluta ex perferendis quasi dolorum sequi?</p>
            <div>
                <Dot/>
                <Dot/>
                <Dot/>

            </div>
        </div>
    )
}

export default Recommendation
