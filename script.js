const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.style.backgroundColor = "#1c478c";
// function resizeCanvas() {
//   //fit canvas to window and fix issues with canvas blur on zoom
//   canvas.style.width = window.innerWidth + "px";
//   canvas.style.height = window.innerHeight + "px";
//   const scale = window.devicePixelRatio;
//   canvas.width = window.innerWidth * scale;
//   canvas.height = window.innerHeight * scale;
//   ctx.scale(scale, scale);
// }
// resizeCanvas();
// window.addEventListener("resize", resizeCanvas);
//canvas commands  https://www.w3schools.com/tags/ref_canvas.asp



//___________________ mouse input___________________



//___________________ key input___________________
let left = false
let right = false
let up = false
let down = false

window.addEventListener("keyup", function(event) {
  switch (event.code) {
    case "ArrowRight":
      right = false
      break;
    case "ArrowLeft":
      left = false
      break;
    case "ArrowUp":
      up = false
      break;
    case "ArrowDown":
      down = false
      break;
  }
});

window.addEventListener("keydown", function(event) {
  switch (event.code) {
    case "ArrowRight":
      right = true
      break
    case "ArrowLeft":
      left = true
      break
    case "ArrowUp":
      up = true
      break
    case "ArrowDown":
      down = true
      break
  }
})





//___________________animation loop ___________________



let movableRectangleX = 40;
let movableRectangleY = 40;
ctx.fillStyle = "yellow"
ctx.fillRect(movableRectangleX, movableRectangleY, 20, 50)


// rectangle = {
//   position : {
//     x: 0, y : 0
//   },
//   velocity: {
//     x:  1,y: 150 + 100 * Math.sin(rectangleXPosition * .01), y:
//   }
// }


let ballXPosition = 0
let ballYPosition = 0
let rectangleXPosition = 0
let rectangleYPosition = 0
const ballRadius = 20
ctx.fillStyle = "Teal"

function createTheRectangle(x, y, w, l) {
  ctx.fillRect(x, y, w, l);
}

function createTheBall(x, y, radius, start, end) {
  ctx.beginPath();
  ctx.arc(x, y, radius, start, end);
  ctx.fill();
}

function cycle() { //this runs 60 times a sedcond
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clears everything

  ballYPosition += .1
  console.log(ballYPosition)




  createTheBall(ballXPosition + 15, Math.sin(ballYPosition * .1) * 100 + 150, ballRadius, 0 * Math.PI, 2 * Math.PI);



  createTheRectangle(rectangleXPosition, 150 + 100 * Math.sin(rectangleXPosition * .01), 30, 100);

  ballXPosition++

  if (ballXPosition >= canvas.width) {
    ballXPosition = 0
  }


  console.log(rectangleXPosition);
  console.log(canvas.width);

  rectangleXPosition++

  if (rectangleXPosition >= canvas.width)
    rectangleXPosition = 0

  console.log(rectangleYPosition)

  requestAnimationFrame(cycle);
}
requestAnimationFrame(cycle);

