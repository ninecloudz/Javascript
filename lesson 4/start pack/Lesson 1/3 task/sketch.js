// https://hanumanum.github.io/p5-problem-generator/index.html

function setup() {

} 
let a = prompt("input a")
let b = prompt("input b")
let c = prompt("input c")

a = parseFloat(a)
b = parseFloat(b)
c = parseFloat(c)

let res = (28 * Math.pow(a, 7) + 12 * b + c) / 4

alert(res)
