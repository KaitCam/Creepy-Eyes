// html setup
var pupilsHTMLCollection = document.getElementsByClassName('pupil');
var pupilsArray = Array.from(pupilsHTMLCollection);
console.log ('pupilsArray', pupilsArray);


// input setups
var input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  mouseY: {
    start: 0,
    end: window.innerHeight,
    current: 0,
  },
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

//output setup
var output = {
  x: {
    start: -70,
    end: 70,
    current: 0,  
  },
  y: {
    start: -70,
    end: 70,
    current: 0,}
};

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;


var handleMouseMove = function (event) {
// x inputs
  input.mouseX.current = event.clientX;
  input.mouseX.fraction =  (input.mouseX.current -  input.mouseX.start) /  input.mouseX.range;

// y inputs
  input.mouseY.current = event.clientY;
  input.mouseY.fraction =  (input.mouseY.current -  input.mouseY.start) /  input.mouseY.range;

//x outputs  
  output.x.current = output.x.end - (input.mouseX.fraction * output.x.range);
  output.x.opposite = output.x.start + (input.mouseX.fraction * output.x.range);
  
// y outputs  
  output.y.current = output.y.end - (input.mouseY.fraction * output.y.range);
  output.y.opposite = output.y.start + (input.mouseY.fraction * output.y.range);
  
  //apply output to HTML
    pupilsArray.forEach(function (pupil, k) {
      
      if (k===0) {
    pupil.style.transform = 'translate('+output.x.opposite+'px, '+output.y.opposite+'px)';
      } else {
        pupil.style.transform = 'translate('+output.x.current+'px, '+output.y.current+'px)';
   }               
  });
  
//console.log('fractionY', input.mouseY.fractionY);
}

var handleResize = function (){
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
  
  input.mouseY.end = window.innerHeight;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
}

window.addEventListener('mousemove', handleMouseMove)
window.addEventListener('resize', handleResize)


