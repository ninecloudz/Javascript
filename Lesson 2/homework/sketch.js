function setup() {
    createCanvas(800, 800)

    background("black")
    makeObject(100,300,60,"blue","red")
    makeObject(200,200,40,"green","magenta")
    makeObject(400,400,100,"#D68910","#DE3163")
}

function makeObject(x,y,w,color1,color2){

    noStroke()
    fill(color1)
    rect(x,y,w,w)

    noStroke()
    fill(color2)
    ellipse(x + w/2,y + w/2,w)

    stroke("white")
    line(x + w/2,y + w/2, x + w/2,y + 2.5*w)  

}
