let x = 200
let y = 300
let d
let r

function setup(){
    createCanvas(500,500)
    frameRate(30)

}
function draw(){
    d1 = map(sin(frameCount/10), -1, 1, 0, 300)
    d2 = map(cos(frameCount/10), -1, 1, 0, 300)
    r = map(sin(frameCount/10), -1, 1, 0, 255)
    g = map(cos(frameCount/10), -1, 1, 0, 255)
    b = map(cos(frameCount/15), -1, 1, 0, 255)


    console.log(d)
    background("green")
    fill(r,g,b)
    ellipse(x,y,d1, d2)
}