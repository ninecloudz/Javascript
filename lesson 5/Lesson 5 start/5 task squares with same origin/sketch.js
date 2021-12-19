let x = 100
let y = 100

function setup() {
    createCanvas(1000,800)
    background("black")
    stroke("white")
    noFill()

    for(i=50; i<200; i+=20){
    rect(x,y,i,i)
}
}