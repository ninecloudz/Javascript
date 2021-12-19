// https://hanumanum.github.io/p5-problem-generator/index.html

function setup() {
   let x = 50
   let y = 50
   let w = 50
   let padding = 100

   createCanvas(1000, 1000)
   fill("black")

   rect(x,y,w,w)
   rect(x + padding,y,w,w)
   rect(x + 2*padding,y,w,w)

   rect(x,y + padding,w,w)
   rect(x + padding,y + padding,w,w)
   rect(x + 2*padding,y + padding,w,w)

   rect(x,y + 2*padding,w,w)
   rect(x + padding,y + 2*padding,w,w)
   rect(x + 2*padding,y + 2*padding,w,w)

   





}