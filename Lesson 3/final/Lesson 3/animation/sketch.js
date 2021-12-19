debugger;
let x = 0
let y = 200
let d = 50
let dirY = 1

function setup() {
createCanvas(800, 500)
background("black")
fill("red")
noStroke()
}

function draw() {
background("black")
stroke("white")
line(100,0,100,500)
line(200,0,200,500)
line(300,0,300,500)
line(400,0,400,500)
line(500,0,500,500)
line(600,0,600,500)
line(700,0,700,500)
//line(0,100,0,500)

noStroke()
if(x > 0 && x<100){
fill("red")
ellipse(x, y, d)
}
if(x + d/2 <=0) {
    dirY = 1
}
}