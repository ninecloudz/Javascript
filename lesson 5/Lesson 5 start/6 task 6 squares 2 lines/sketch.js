let x = 100
let y = 100
let w = 20

function setup() {
    createCanvas(1000, 800)
    background("black")
    stroke("white")
    noFill()

    for (let i = 100; i < 220; i += 50) {
        rect(i, y, w, w)

    }

    for (let i = 100; i < 220; i += 50) {
        rect(i, 1.5*y , w, w)

    }


}