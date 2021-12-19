function setup() {

let r = prompt("input r")
let x = prompt("input x")
let y = prompt("input y")
let col = prompt("ellipse color")
let coll = prompt("line color")
let b = prompt("input background colour")


createCanvas(800, 500)
background(b)

fill(col)
ellipse(x,y,r)

stroke(coll)
line(30,50,300,400)

createCanvas(500, 500)
background("#1B7340")

fill("#E9897E")
stroke("black")
circle(230, 244, 131)

fill("#0072B5")
stroke("black")
circle(258, 233, 103)

fill("#FDAC53")
stroke("black")
rect(275, 224, 145, 42)

stroke("black")
line(0, 0, 230, 244)

stroke("black")
line(0, 0, 258, 233)


}