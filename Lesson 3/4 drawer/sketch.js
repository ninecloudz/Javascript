// choose from ellipse, rectangle, point, default: nothing 
function setup() {
    createCanvas(500,400)
    background("green")

    let obj = prompt("input shape")

    if(obj == "rectangle"){
        let x = prompt("input x")
        let y = prompt("input y")
        let w = prompt("input w")
        let h = prompt("input h")
        let c = prompt("input color")

        x = parseInt(x)
        y = parseInt(y)
        w = parseInt(y)
        h = parseInt(y)

        fill(c)
        rect(x,y,w,h)
    }
    else if(obj == "ellipse"){
        let x = prompt("input x")
        let y = prompt("input y")
        let w = prompt("input r")
        let h = prompt("input r2")
        let c = prompt("input color")

        x = parseInt(x)
        y = parseInt(y)
        w = parseInt(w)
        h = parseInt(h)

        fill(c)
        ellipse(x,y,w,h)
    }

    else if(obj == "line"){
        let x = prompt("input x")
        let y = prompt("input y")
        let x1 = prompt("input x2")
        let y2 = prompt("input y2")
        let s = prompt("input color")

        x = parseInt(x)
        y = parseInt(y)
        x2 = parseInt(x2)
        y2 = parseInt(y2)

        stroke(s)
        ellipse(x,y,x2,y2)


    }

}