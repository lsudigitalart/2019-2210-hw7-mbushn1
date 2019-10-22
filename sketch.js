var song
frameRate = 60
var amp,level;
var fft;
var song3
var song4
var song5

function preload() {
  song = loadSound("song.mp3")
  //song3 = loadSound("song3.mp3");
  //song4 = loadSound("song4.mp3");
  //song5 = loadSound("I Want It That Way.mp3");
}
function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  
  song.play();
  //song3.play();
  //song4.play();
  //song5.play();
  amp= new p5.Amplitude();
  fft = new p5.FFT()
}


function draw() {
  var spectrum = fft.analyze();
  var t = fft.getEnergy("treble");
  var m = fft.getEnergy("mid");
  var b = fft.getEnergy("bass");
  
  
  level = amp.getLevel();  
  
mappedc=map(level,0,1,0,225);
  background(0);

  stroke(200-mappedc,200-mappedc,200-mappedc);

  push();
  strokeWeight(.5);
  rotateX(frameCount * 0.01);
  rotateY(0);
  rotateZ(frameCount * 0.01);
  fill(m,t,b)
  torus(b*3,t-10,100);
  pop();

  push();
  strokeWeight(2);
  translate(500,0);
  rotateX(frameCount * 0.02);
  rotateY(b * 0.01);
  fill(b,m);
  box(b-2,b-2,b-2);
  pop();

  push();
  strokeWeight(2);
  translate(0,0)
  rotateX(m * 0.02); 
  rotateY(frameCount * 0.01);
  fill(b,m);
  box(m,m,m);
  pop();

  push();
  strokeWeight(2);
  translate(-500,0);
  rotateX(t * 0.02);
  rotateY(frameCount * 0.01);
  fill(b,m);
  box(t*2,t*2,t*2);
  pop();

  push();
  strokeWeight(.5);
  translate(-b,b,m);
  rotateX(0);
  rotateY(0);
  fill(b,m,b);
  sphere(mappedc);
  pop();

  push();
  strokeWeight(.5);
  translate(-b,-b,m);
  rotateX(0);
  rotateY(0)
  fill(b,m,b);
  sphere(mappedc);
  pop();

  push();
  strokeWeight(.5);
  translate(b,-b,m);
  rotateX(0);
  rotateY(0)
  fill(b,m,b);
  sphere(mappedc);
  pop();

  push();
  strokeWeight(.5);
  translate(b,b,m);
  rotateX(0);
  rotateY(0)
  fill(b,m,b);
  sphere(mappedc);
  pop();

  
  
  
}

