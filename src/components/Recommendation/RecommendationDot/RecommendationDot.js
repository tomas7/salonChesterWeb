import React from 'react'
import myClass from './RecommendationDot.module.scss'

function RecommendationDot(props) {
    let activeStyle = null
    if (props.active === props.idx) {
        activeStyle = "#4B738B"
    }

    return (
        <div onClick={()=>props.select(props.idx)} style={{backgroundColor: activeStyle}} className={myClass.dot}>
            
        </div>
    )
}

export default RecommendationDot
