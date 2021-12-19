//Արտածել արժեքները և արդյունքը կտավի վրա

function setup() {
    let a = prompt("input a")
    let b = prompt("input b")
    let c = prompt("input operator") // +, -, *, /

    createCanvas(500,400)
    background("green")
    textSize(40)

    a = parselFloat(a)
    b = parcelFloat(b)

    if(c =="+"){
        result = a + b
        text(a,20,50)
        text(c,20,100)
        text(b,20,150)
        text("+",20,50)


    }


}
