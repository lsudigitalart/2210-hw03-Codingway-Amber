function setup() {
    createCanvas(400, 400);
    background(100);

    var circleSize = 30;
    
    for(var i = circleSize/2; i < width; i = i + circleSize*1.25){
        ellipse(i, circleSize/2, circleSize); 
        console.log("the value of i is now: ", i);
    }
}

function draw() {

}