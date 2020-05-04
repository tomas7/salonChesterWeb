import React, {useState, useEffect, useRef} from 'react'
import myClass from './boubles.module.scss'
import { TimelineLite, Power1, Power4, TweenLite, TimelineMax, CustomWiggle, CustomEase, Bounce } from 'gsap/all';
import groomingImg from '../../images/graphics/GroomingM.png'
import coursesImg from '../../images/graphics/CourseM.png'
import getRandom from '../../Utils/RandomizeBetween'

function Boubles(props) {
    const [anim, Setanim] = useState(false);

    const svg1_anim = useRef(null);
    const svg2_anim = useRef();
    const mainImg_anim = useRef();
    const mainImg_anim_wiggle = useRef();

    let AnimDur = 4;
    let svgPathG = "M748.48,569.35C710.61,755.77,611,756.53,520.81,765.17S407.19,709.6,324.08,686.75s-117-3.09-204.66-68.55S62.19,468.39,105.83,428c90.16-83.37,38.29-138.91,29-219.87S185.49,27.23,346.63,23.53,527,129.74,558.55,192.11,641,298.7,679.51,323.28,786.35,382.93,748.48,569.35Z";
    let svgPathC = "M669.82,618.77c-10.9,76.5-59.73,100.48-112.92,95.68s-115-44-167.79-43.59S251.29,656.25,216,609.49c-25.65-34-32.26-67.25-2.18-119.56s24.85-121.7,10-209.3,64.09-143.4,115.1-149.5S486.27,125,498.92,193,512,343,569.54,414.94,680.72,542.26,669.82,618.77Z"
    let transformSVG_G = "translate(-63.18 -23.44)"
    let transformSVG_C = "translate(-83.18 -103.44)"
    let svgColorG_1 = "#4B738B"
    let svgColorC_1 = "#F29F8D"
    let svgColorG_2 = "#88ACBC"
    let svgColorC_2 = "#F27D72"
    let imgMain = null;
    let svg1 = null;
    let svg2 = null;

    useEffect(() => {
        //assign new timeline
        mainImg_anim_wiggle.current = new TimelineMax({ pause: true, repeat:-1 })
        //tell which steps and to which element
        .to(imgMain, 1, {rotation: randomNScale,scale:randomNScale*1.01, ease: Bounce.easeInOut,repeat:-1 , yoyo:true})
        .pause()
        if (props.wiggle === true) {
            if (props.isGrooming) {
                mainImg_anim.current = new TimelineMax({ pause: false, repeat:-1 })
        
                .to(imgMain, AnimDur, {scale: 1, ease: Power1.easeInOut,   })
                .to(imgMain, AnimDur, {scale: 1.025,ease: Power1.easeInOut,   })
                .to(imgMain, AnimDur, {scale: 1.05, ease: Power1.easeInOut,   })
                .to(imgMain, AnimDur, {scale: 1.025, ease: Power1.easeInOut,   })
                .to(imgMain, AnimDur, {scale: 1, ease: Power1.easeInOut,   })
               
                 svg1_anim.current = new TimelineMax({ pause: false, repeat:-1, yoyo:true,  })
                .to(svg1, AnimDur, { autoAlpha: .5, scale: 1.2,ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg1, AnimDur, {autoAlpha: .4, scale:  1.225, ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg1, AnimDur, {autoAlpha: .3, scale:  1.25, ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg1, AnimDur, {autoAlpha: .4, scale: 1.225, ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg1, AnimDur, { autoAlpha: .5, scale: 1.2,ease: Power1.easeInOut,  yoyo:true }, )
                .play(2)
                svg2_anim.current = new TimelineMax({ pause: false, repeat:-1, yoyo:true })
                .to(svg2, AnimDur, { autoAlpha: .3,scale: 1.0,ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg2, AnimDur, {autoAlpha: .4,scale: 0.975, ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg2, AnimDur, {autoAlpha: .5,scale: 0.95, ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg2, AnimDur, {autoAlpha: .2,scale: 0.975, ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg2, AnimDur, { autoAlpha: .3,scale: 1.0,ease: Power1.easeInOut,  yoyo:true }, )
                .play(3)
            }else {
                mainImg_anim.current = new TimelineMax({ pause: true, repeat:-1, yoyo:true })
                .to(imgMain, AnimDur, {scale:1 ,ease: Power1.easeInOut,  yoyo:true })
                .to(imgMain, AnimDur, {scale:1.03 ,ease: Power1.easeInOut,  yoyo:true })
                .to(imgMain, AnimDur, {scale:1.06 , ease: Power1.easeInOut,  yoyo:true })
                .to(imgMain, AnimDur, {scale:1.03 ,ease: Power1.easeInOut,  yoyo:true })
                .to(imgMain, AnimDur, {scale:1. ,ease: Power1.easeInOut,  yoyo:true })
                .play()
                svg1_anim.current = new TimelineMax({ pause: true, repeat:-1, yoyo:true,  })
                .to(svg1, AnimDur, {scale:1.7 ,autoAlpha: .4, ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg1, AnimDur, {scale:1.725 ,autoAlpha: .3,  ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg1, AnimDur, {scale:1.75 ,autoAlpha: .4,  ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg1, AnimDur, {scale:1.725 ,autoAlpha: .5,  ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg1, AnimDur, {scale:1.7 ,autoAlpha: .4, ease: Power1.easeInOut,  yoyo:true }, )
                .play(1)
                svg2_anim.current = new TimelineMax({ pause: true, repeat:-1, yoyo:true })
                .set(svg2, {css: {opacity: 0, scale: 1.4}})
              
                .to(svg2, AnimDur, {scale:1.4 ,autoAlpha: .2,ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg2, AnimDur, {scale:1.425 ,autoAlpha: .4, ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg2, AnimDur, {scale:1.45 ,autoAlpha: .3, ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg2, AnimDur, {scale:1.425 ,autoAlpha: .1, ease: Power1.easeInOut,  yoyo:true }, )
                .to(svg2, AnimDur, {scale:1.4 , autoAlpha: .2,ease: Power1.easeInOut,  yoyo:true }, )
                .play(2)
            }
        }
       


    }, [])

    //listen to changes in state and fire functions on animations declared on first render
    useEffect(() => {
        if (props.wiggle === true) {
            if (anim) {
                console.log(anim)
                mainImg_anim.current.pause()
                mainImg_anim_wiggle.current.play()
            }else {
                console.log(anim)
                mainImg_anim_wiggle.current.restart()
                mainImg_anim_wiggle.current.pause()
                mainImg_anim.current.play()
                
            }
        }
      
       
        
    })

    let onHover = () => {
        Setanim(true)
    }


    let ofHover = () => {  
        Setanim(false)
    }


    let randomNScale = getRandom(0.97, 1.03)

    return (
        <>
            <img className={myClass.mainImg}onMouseEnter={()=> 
                onHover(svg1)} onMouseLeave={()=> 
                ofHover(svg1)} src={props.flatImg} ref={img => imgMain = img} alt="Blank"/>
            <svg style={{transform: `scale(${props.scale + 1})`, 
                        opacity: props.opacity,
                                   
                    }}
                 ref={svg => svg1 = svg} 
                id="Layer_18" 
                data-name="Layer 18" 
                xmlns="http://www.w3.org/2000/svg" 
                fill={props.bouble1c} 
                viewBox="0 0 696.37 742.53">
                    <defs></defs>
                    <title>drawing_grooming</title>
                    <path class="cls-1" 
                    d={props.boubleSVG} 
                    transform={props.boubleSVGTransform}/>
            </svg>
            <svg style={{transform: `scale(${props.scale + .5})`, 
                        opacity: props.opacity + .1,
                                         
                    }} ref={svg => svg2 = svg} 
                id="Layer_19" 
                data-name="Layer 18" 
                xmlns="http://www.w3.org/2000/svg" 
                fill={props.bouble2c} 
                viewBox="0 0 696.37 742.53">
                <defs></defs>
                <title>drawing_grooming</title>
                <path class="cls-1" 
                d={props.boubleSVG} 
                transform={props.boubleSVGTransform}/>
            </svg>           
        </>
    )
}

export default Boubles
