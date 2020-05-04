import React from 'react'
import myClass from './RecommendationDot.module.scss'

function RecommendationDot(props) {
    let activeStyle = null
    if (props.active === props.idx) {
        activeStyle = "black"
    }

    return (
        <div onClick={()=>props.select(props.idx)} style={{backgroundColor: activeStyle}} className={myClass.dot}>
            
        </div>
    )
}

export default RecommendationDot
