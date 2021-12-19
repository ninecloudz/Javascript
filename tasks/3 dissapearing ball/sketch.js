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
    line(100, 0, 100, 500)
    line(200, 0, 200, 500)
    line(300, 0, 300, 500)
    line(400, 0, 400, 500)
    line(500, 0, 500, 500)
    line(600, 0, 600, 500)
    line(700, 0, 700, 500)
    //line(0, 100, 0, 500)

    //noStroke()
    //fill("red")
    //ellipse(x, y, d)
    x += dirY


    if (x > 0 && x < 100) {
        noStroke()
        fill("red")
        ellipse(x, y, d)
    }if (x > 100 && x < 200){
        noStroke()
        noFill()
        ellipse(x, y, d)

    }if (x > 200 && x < 300){
        noStroke()
        fill("red")
        ellipse(x, y, d)

    }if (x > 300 && x < 400){
        noStroke()
        noFill()
        ellipse(x, y, d)

    }if (x > 400 && x < 500){
        noStroke()
        fill("red")
        ellipse(x, y, d)

    }if (x > 500 && x < 600){
        noStroke()
        noFill()
        ellipse(x, y, d)

    }if (x > 600 && x < 700){
        noStroke()
        fill("red")
        ellipse(x, y, d)

    }if (x > 700 && x < 800){
        noStroke()
        noFill()
        ellipse(x, y, d)

    }




}
