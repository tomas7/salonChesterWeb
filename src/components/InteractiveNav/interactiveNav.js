import React, {useEffect, useRef} from 'react'
import myClass from './interactiveNav.scss'
import {TweenLite, Power1, Power4, Bounce, Elastic, SteppedEase, Back} from 'gsap'
import icon_ from '../../images/Icons/icon.png'
import randomizer from '../../Utils/RandomizePaths'
import getRandomArbitrary from '../../Utils/RandomizeBetween'


function InteractiveNav() {         

    const myRef = useRef(null)
    let test = null;
    let boxes = [];
    let dPath = 'M 0 50 C 100 50 200 50 250 50 C 350 50 350 100 400 100 C 450 100 450 50 550 50 C 650 50 650 50 750 50 C 750 50 825 50 800 50 L 800 0 L 0 0 L 0 50 ';
  
  
    useEffect(() => {
      test = myRef.current.children;
  
      transformInit();
    }, []);
    let adjustScale = (pos) => {
      let multiplier;
      let scale = 1;
      if (pos === 1 || pos === 5) {
        multiplier = .5;
      }else if (pos === 2 || pos === 4) {
        multiplier = .75;
      }else {
        multiplier = 1;
      }

      scale = multiplier * scale;

      return scale;

    }
  
    let transformInit = () => {
      for (let i = 0; i < test.length; i++) {
        console.log("init")
        let node = test[i];
  
        // Initialize transforms on node
        TweenLite.set(node, { x: 0 });
  
        boxes[i] = {
          transform: node.style.transform,
          order:[i],
          
          x: node.offsetLeft,
          y: node.offsetTop,
          node
        };
        console.log(node.style.transform)
      }
    }


    let transformStripper = (val, index = 0) => {
      let strippedValue
  
      strippedValue = val.replace(/[^0-9\-.,]/g, '').split(',');
  
      return strippedValue[index]
    }

    //Get number in between

    //randomize and generate path
    
    let swap = (classCase, indx) => {
  
      myRef.current.classList.remove("case1", "case2", "case3", "case4", "case5");
      myRef.current.classList.add(classCase);
  
      for (let i = 0; i < test.length; i++) {
        console.log("swapping")
        let box = boxes[i];
        let orderStyle = parseInt(box.order)

        orderStyle = orderStyle + 1;
        let lastX = box.x;
        let lastY = box.y;

        console.log(boxes)
        let transformX = transformStripper(box.transform, 0)
        let transformY = transformStripper(box.transform, 1)
  
        // if (orderStyle === 5 ) {
        //   box.node.style.order = 1
        // }else {
        //   box.node.style.order = orderStyle + 1
        // }
        // console.log(box.node.style.order)

        box.x = box.node.offsetLeft;
        box.y = box.node.offsetTop;

        //set scale 
        let scale = 1;

        if (orderStyle === indx) {
          scale = 1
        }

        else if (orderStyle === 4 || orderStyle === 2 ) {
          scale = .75
        }

        else if (orderStyle === 1|| orderStyle === 5 ) {
          scale = .5
        }

        // Continue if box hasn't moved
        // if (lastX === box.x && lastY === box.y) continue;
  
        // Reversed delta values taking into account current transforms
        let x = transformX + lastX - box.x;
        let y = transformY + lastY - box.y;
        
     
        // tween config
        let easing4 = Power4.easeOut;
        let easing1= Power1.easeOut;
        let a_in = 1;
        let a_out = .15;
        let dur = 1.25;
        let durHalf = .75;

        
        // Tween to 0 to remove the transforms
        console.log(orderStyle)
        if (orderStyle === 3) {
          TweenLite.fromTo(box.node, dur, { x, y, scale:scale, autoAlpha:1 }, { x: 0, y: 0, scale:scale, autoAlpha: 1, ease: easing1},)
          TweenLite.fromTo(box.node, dur, {autoAlpha:1 }, {autoAlpha: 1,delay:1, ease: easing4},  )    
        }else if (orderStyle === indx) {
          TweenLite.fromTo(box.node, dur, { x, y, autoAlpha:1 }, { x: 0, y: 0, autoAlpha: 1, ease: easing1},)
          TweenLite.fromTo(box.node, dur, {autoAlpha:1 }, {autoAlpha: 1,delay:1, ease: easing4})    
        
        }else {
          TweenLite.fromTo(box.node, dur, { x, y }, { x: 0, y: 0, delay:0, ease: easing1})
          TweenLite.fromTo(box.node, durHalf, {autoAlpha:a_in }, {autoAlpha: a_out, ease: easing4})
          TweenLite.fromTo(box.node, durHalf, {autoAlpha:a_out }, { autoAlpha: a_in,delay:.5, ease: easing4})    
        }
      }

      
      let randomNumber = Math.floor(getRandomArbitrary(1,3))
      console.log(randomNumber)
      if(randomNumber === 1){
   
        // TweenLite.to("#path",1,{attr:{d:'M 0 50 C 100 50 150 100 250 50 C 350 0 350 150 400 150 C 450 150 450 100 550 50 C 650 0 650 0 800 50 C 800 50 800 50 800 50 L 800 0 L 0 0 L 0 50 '}, delay:0.05, ease:Back.easeOut});
         TweenLite.to("#path",1,{attr:{d: randomizer(1)}, delay:0.05, ease:Back.easeOut});   
        TweenLite.to("#path",1,{attr:{d:dPath}, delay:0.65, ease:Back.easeOut});
      } else if (randomNumber === 2)

        // TweenLite.to("#path",1,{attr:{d:'M 0 50 C 150 0 150 0 250 50 C 350 100 350 150 400 150 C 450 150 450 0 550 50 C 650 100 700 50 800 50 C 800 50 800 50 800 50 L 800 0 L 0 0 L 0 50 '}, delay:0.05, ease:Back.easeOut});
        TweenLite.to("#path",1,{attr:{d: randomizer(2)}, delay:0.05, ease:Back.easeOut});   
        TweenLite.to("#path",1,{attr:{d:dPath}, delay:0.65, ease:Back.easeOut});
    
    }
  

    return (
        <div className="interactiveNavWrapper">
           <div className="group" ref={myRef}>
                <span  className="box" onClick={() => swap("case1", 1)}>
                  <h3>Icon name1</h3>
                  <img src={icon_} alt="Blank"/>
                </span>
                <span  className="box" onClick={() => swap("case2", 2)}>
                
                  <img src={icon_} alt="Blank"/>
                  <h3>Icon name2</h3>
                </span>
                <span  className="box" onClick={() => swap("case3", 3)}>
                  <h3>Icon name3</h3>
                  <img src={icon_} alt="Blank"/>
                </span>
                <span  className="box" onClick={() => swap("case4", 4)}>
                  <h3>Icon name4</h3>
                  <img src={icon_} alt="Blank"/>
                </span>
                <span  className="box" onClick={() => swap("case5", 5)}>
                  <h3>Icon name5</h3>
                  <img src={icon_} alt="Blank"/>
                </span>
            </div>
         </div>
    )
}

export default InteractiveNav
