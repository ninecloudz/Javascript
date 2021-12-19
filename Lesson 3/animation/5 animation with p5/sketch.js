//Շարժվող քառակուսի, պատերից անդրադարձում և գույնի փոփոխություն պատին կպնելուց հետո
let x = 100
let y = 200
let d = 150
let canvW = 500
let canvH = 500
let dirx = 1
let diry = 1

function setup() {
    createCanvas(canvW,canvH)
    noStroke()
    
}

function draw(){
    background("black")
    fill("blue")
    ellipse(x,y,d)
    if(x + d/2 >=canvW){
        dirx = -1
    }
    if(x - d/2 <=0){
        dirx = 1
    }
    
    x +=dirx
    y +=0.5

    if(y + d/2 >=canvH){
        diry = -1 
    }
    if(y - d/3 <=0){
        diry = 1
    }



}
    
