let w = 1000
let h = 800

let obj1={
    x:w/2,
    y:h/2,
    d:100,
    clr:"red",
    v:10

}

function setup() {
    createCanvas(w, h)
    background("black")
    stroke("white")
}

function draw() {
    background("black")
    fill(obj1.clr)
    ellipse(obj1.x,obj1.y,obj1.d)

}
function keyPressed() {
    if(keyCode==RIGHT_ARROW){
        obj1.x+=obj1.v
        obj1.x = constrain(obj1.x,0 +obj1.d/2,w-obj1.d/2) 
        
    }

    if(keyCode==LEFT_ARROW){
        obj1.x-=obj1.v  
        obj1.x = constrain(obj1.x,0 +obj1.d/2,w-obj1.d/2)  

    }
    if(keyCode==UP_ARROW){
        obj1.y-=obj1.v 
        obj1.x = constrain(obj1.x,0 +obj1.d/2,w-obj1.d/2)
    }

    if(keyCode==DOWN_ARROW){
        obj1.y+=obj1.v 
        obj1.x = constrain(obj1.x,0 +obj1.d/2,w-obj1.d/2)    
    }
    if(keyCode==32){
        obj1.clr = getRandomColor()     
    }

    console.log(key,keyCode)

}