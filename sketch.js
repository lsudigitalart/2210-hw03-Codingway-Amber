function setup() {
    createCanvas(400, 400);
    noStroke();
}

function draw() {
    background(208, 119, 122); 
     translate(-50, -50);
     scale(1.5);
     
     var step = 6;
     for (var y = 0; y <= height; y += step) {
       for (var x = 0; x <= width; x += step) { 
         rotate(PI/11500);
         fill(255, 175, 195);
         ellipse(x, y, 4, 7);
       }
     }
   } 