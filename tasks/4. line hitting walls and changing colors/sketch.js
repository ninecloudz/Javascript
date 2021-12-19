let x = 0
let y = 0
let W = 1000
let H = 300
let yStep = 1

function setup() {
let padding = 5

createCanvas(W, H)
noFill()
stroke("magenta")
}


function draw() {
background("black")
line(x, y, x + W, y)

y += yStep
if(y>=H){
    yStep = -1
    stroke("red")

}
if(y<=0){
    yStep = 1
    stroke("yellow")
    
}
}

