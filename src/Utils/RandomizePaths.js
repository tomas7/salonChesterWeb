

import getRandomArbitrary from './RandomizeBetween'

let randomizer = (val) => {
    let ranVal;
    let dPath; 
    let multiplier = getRandomArbitrary(0.9, 1.1);

    function randomize(val){
      ranVal = val * multiplier
      console.log(val)
      return ranVal;
    }
    if (val === 1) {
       dPath = `M 0 50 C 100 50 ${randomize(180)} ${randomize(70)} 250 50 C 350 ${randomize(30)} 350 120 400 120 C 450 120 450 ${randomize(70)} 550 50 C 650 ${randomize(30)} 650 ${randomize(30)} ${randomize(770)} 50 C ${randomize(770)} 50 ${randomize(800)} 50 800 50 L 800 0 L 0 0 L 0 50`
     }else if (val === 2) {
      dPath = `M 0 50 C ${randomize(120)} ${randomize(30)} ${randomize(180)} ${randomize(30)} 250 50 C 350 ${randomize(70)} 350 ${randomize(120)} 400 120 C 450 ${randomize(120)} 450 ${randomize(30)} 550 50 C 650 ${randomize(70)} ${randomize(670)} 50 ${randomize(770)} 50 C ${randomize(770)} 50 ${randomize(800)} 50 800 50 L 800 0 L 0 0 L 0 50`
    }
    return dPath
  }

export default randomizer;