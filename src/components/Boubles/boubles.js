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
            <img className={myClass.mainImg} 
                style={{  maxWidth: props.maxWidth,
                    maxHeight: props.maxHeight   }}
                onMouseEnter={()=> 
                onHover(svg1)} onMouseLeave={()=> 
                ofHover(svg1)} src={props.flatImg} ref={img => imgMain = img} alt="Blank"
                onClick={props.openModal}
                />
                

            <svg style={{transform: `scale(${props.scale + 1})`, 
                        opacity: props.opacity,
                        minWidth: props.minWidth         
                    }}
                 ref={svg => svg1 = svg} 
                id="Layer_18" 
                data-name="Layer 18" 
                xmlns="http://www.w3.org/2000/svg" 
                fill={props.bouble1c} 
                viewBox="0 0 696.37 742.53">
                    <defs></defs>
                    <title>drawing_grooming</title>
                    <path className="cls-1" 
                    d={props.boubleSVG} 
                    transform={props.boubleSVGTransform}/>
            </svg>
            <svg style={{transform: `scale(${props.scale + .5})`, 
                        opacity: props.opacity + .1,
                        minWidth: props.minWidth      
                    }} ref={svg => svg2 = svg} 
                id="Layer_19" 
                data-name="Layer 18" 
                xmlns="http://www.w3.org/2000/svg" 
                fill={props.bouble2c} 
                viewBox="0 0 696.37 742.53">
                <defs></defs>
                <title>drawing_grooming</title>
                <path className="cls-1" 
                d={props.boubleSVG} 
                transform={props.boubleSVGTransform}/>
            </svg>           
        </>
    )
}

export default Boubles
