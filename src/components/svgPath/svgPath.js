import React from 'react'
import myClass from './svgPath.module.scss'

function svgPath() {
    return (
        <div className={myClass.test}>
              
            <svg x="0" y="0" width="100%" height="45%" viewBox="0 0 795 358" xmlns="http://www.w3.org/2000/svg" >
            
            <filter id="dropshadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/> 
                <feOffset dx="2" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.25"/> 
                </feComponentTransfer>
                <feMerge> 
                    <feMergeNode/> 
                    <feMergeNode in="SourceGraphic"/> 
                </feMerge>
            </filter>
            
            <path   id='path' className="path" width="100%" height="100%" fill="none" fill="#FBFBFB" d="M0 5C200 5 200 5 250 5 350 5 350 50 400 50 450 50 450 5 550 5 650 5 650 5 750 5 750 5 825 5 800 5V0H0V50" strokeDasharray="2042 300" strokeDashoffset="2342" style={{filter:"url(#dropshadow)"}} />
            </svg>
        </div>    
    )
}

export default svgPath
