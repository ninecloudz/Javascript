let x = 50, y = 50
let w = 100, h = 100
let start = 0
let end = Math.PI / 2
let step = 150

function setup() {
    createCanvas(600, 600)
    background("black")


    for (let x = 25; x < 600; x += step) {

        for (let y = 25; y < 600; y += step) {
            noFill()
            let s = random(1,25)
            let wAdd = random(-20, 20)
            let angle = random(0,2*PI)
            strokeWeight(s)
            stroke(getRandomColor())

            
            push()
            translate(x+w/2, y+h/2)
            rotate(angle)
            rect(x, y, w+wAdd, h)
            pop()

            let s1 = random(1,25)
            let wAdd1 = random(-20, 20)
            strokeWeight(s1)
            stroke(getRandomColor())

            push()
            translate(x+w/2, y+h/2)
            rotate(angle)
            arc(0 , 0, w, h, start, end, OPEN)
            pop()
            

        }

    }




}