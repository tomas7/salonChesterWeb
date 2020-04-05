import React, {useEffect, useRef, useState} from 'react'
import myClass from './interactiveNav.scss'
import {TweenLite, Power1} from 'gsap'
import icon_ from '../../images/Icons/icon_.png'


function InteractiveNav_mk1() {         

    const [oldlArr, setoldArr] = useState([])
    const [updatedArr, setupdatedArr] = useState([])

    const myRef = useRef(null)

    const numberOfItems = 5

    let boxes = [];

    let refArr = [];

    let items = [];
    let item;
  
  useEffect(() => {
    refArr = myRef.current.children;

    initTranfsorm()
   
  }, [])
   

    for (let index = 0; index < numberOfItems; index++) {
      const element = numberOfItems;
      let index_ = index + 1
      item = <div className="box" onClick={() => swap()}>{index + 1}</div>
      items.push(item);
    }

    let initTranfsorm = () => {
      for (let index = 0; index < refArr.length; index++) {
        const element = refArr[index];
        var box;
        //each element set TweenLite
        console.log(element)
        TweenLite.set(element, { x: 0 });
        
        //create object boxes 
        box = {
          transform: element.style.transform,
          order: index + 1,
          x: element.offsetLeft,
          y: element.offsetTop,
          element
        };
        
        boxes.push(box)
      }    
    }

    let swap = (classCase) => {

       //myRef.current.classList.remove("trick");
       //myRef.current.classList.add(classCase);
 
      for (let index = 0; index < items.length; index++) {
        var box = boxes[index];
        console.log(box.order)
        var lastX = box.x;
        var lastY = box.y;

        box.x = box.element.offsetLeft;
        box.y = box.element.offsetTop;

       console.log(box)

       if (box.order == 5){
        box.element.style.order = 1
       }else {
        box.element.style.order = box.order + 1
       }

        var x = 0 + lastX - box.x;
        var y = 0 + lastY - box.y;

        TweenLite.fromTo(box.element, 0.5, { x, y }, { x: 0, y: 0}, Power1);
      }
    }
    return (
        <div className="interactiveNavWrapper">
           <div className="group" ref={myRef}>
                {items}

             
            </div>
            <button>click</button>
         </div>
    )
}

export default InteractiveNav_mk1
