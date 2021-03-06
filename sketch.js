function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
    
  sky();
  //draw planet
  planet();
  //draw ground
  ground();

}

// function draw() 
// {
// }

function mousePressed(){
  clear();
  setup();
  // draw();
}

function sky(){
  c1 = color(getRandomColor());
  c2 = color(getRandomColor());
  setGradient();
}

function setGradient() {
  rect(0, 0, height, width);
  for (var y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function planet(){
  fill(getRandomColor());
  noStroke();
  circle(random((width/12),width),random((height/12),height),random((height+width)/12,(height+width)/4))
}
         
function ground(){
  horL = random(height, height/2);
  horR = random(height, height/2);
        strokeWeight(0);
        fill(getRandomColor());
        quad(0,horL,width,horR,width,height,0,height);
}

function getRandomColor() {
  const r = random(0, 255);
  const g = random(0, 255);
  const b = random(0, 255);
  return color(r, g, b);
}