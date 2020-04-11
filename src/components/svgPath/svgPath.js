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
            
            <path   id='path' class="path" width="100%" height="100%" fill="none" fill="#FBFBFB" d="M 0 50 C 100 50 200 50 250 50 C 350 50 350 100 400 100 C 450 100 450 50 550 50 C 650 50 650 50 750 50 C 750 50 825 50 800 50 L 800 0 L 0 0 L 0 50 " stroke-dasharray="2042 300" stroke-dashoffset="2342" style={{filter:"url(#dropshadow)"}} />
            </svg>
        </div>    
    )
}

export default svgPath
