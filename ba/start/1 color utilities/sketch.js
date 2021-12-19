function setup() {
    createCanvas(800, 800)

    getGradientOf("r",null,300,20,10,10)
}


function getRandomColor() {
    let r = int(random(0, 255))
    let g = int(random(0, 255))
    let b = int(random(0, 255))

    let colo = "rgb(" + r + ", " + g + "," + b + ")"
    return colo;
}

function getGradientOf(color, count,w,h,x,y){
    let step = int(w/255)
    noStroke()
    for(let i=0;i<255;i++){
        fill(i,0,0)
        rect(x,y,step,h)
        x+=step
    }

}


function getPalette(nameOfPallete){

}

function getRandomFromPalette(){

}