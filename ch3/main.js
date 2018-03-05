// constants
// constants can be functions
/* global GWindow, GLabel, GOval, GRect, GLine */
// open -a Google\ Chrome index.html


const GWIDTH = 500;
const GHEIGHT = 200;


function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    // location.reload();
    setTimeout(window.location.reload.bind(window.location),1000);

    // return color;
    // return getRandomColor();
  }
  return color;
  // location.reload();
}

//  for (let i=0;i<100;i++) {
//    setTimeout(colorCircles(inner, middle, outer),1000);
// }

//
// '#'+(Math.random()*0xFFFFFF<<0).toString(16);
//
//
//
// function setRandomColor() {
//   $("#colorpad").css("background-color", getRandomColor());
// }

function helloWorld(){
  return "Hello Bro!";
}

function graphicsHW() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let msg = GLabel(helloWorld(), 50, 100);
  // let msg2 = GLabel("Whatever you want in there", 50, 150);
  // let msg3 = GLabel("HI YOU SUCK", 20, 75);
  msg.setFont("75px 'Sexy Queen'");
  gw.add(msg);
  // gw.add(msg2);
  // gw.add(msg3);
  // .add(msg2);
}

function blueRectangle() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let rect = GRect(150, 50, 200, 100);
  let oval = GOval(300, 100, 100, 50);
  rect.setColor("#314C7E");
  // gw.setColor("#0098FF");
  rect.setFilled(true);
  // gw.setFilled(true);
  gw.add(rect);

  gw.add(oval);
  oval.setFilled(true);
  oval.setColor("#C4D9BC");
}

function drawDiagonals(){
  let gw = GWindow(GWIDTH, GHEIGHT);
  let line = GLine(0, GHEIGHT, GWIDTH, 0);
  let line2 = GLine(0, 0, GWIDTH, GHEIGHT);
  line.setColor("blue");
  line2.setColor("#64BA8D");
  gw.add(line2);
  gw.add(line);
}

function target(){
  let gw = GWindow(GWIDTH, GHEIGHT);
  let xc = GWIDTH/2;
  let yc = GHEIGHT + 105;
  let rect = GRect(0, 0, GWIDTH, GHEIGHT);
  gw.add(rect);
  rect.setFilled(true);
  rect.setColor("#BEE1FF");

  gw.add(createFilledCircle(xc, yc, 275, getRandomColor()));
  gw.add(createFilledCircle(xc, yc, 250, getRandomColor()));
  gw.add(createFilledCircle(xc, yc, 225, getRandomColor()));
  gw.add(createFilledCircle(xc, yc, 200, getRandomColor()));
  gw.add(createFilledCircle(xc, yc, 175, getRandomColor()));
  gw.add(createFilledCircle(xc, yc, 150, ("#BEE1FF")));
  // gw.add(createFilledCircle(xc, yc, 125, "#644C9B"));
  // gw.add(createFilledCircle(xc, yc, 100, "#C678DA"));
  // gw.add(createFilledCircle(xc, yc, 75, "#314C7E"));
  // gw.add(createFilledCircle(xc, yc, 50, "#64BA8D"));
  // gw.add(createFilledCircle(xc, yc, 25, "#1B4A52"));
  // gw.add(createFilledCircle(xc, yc, 5, "#64BA8D"));
}

function createFilledCircle(x, y, r, color){
  let circle = GOval(x - r, y - r, 2 * r, 2 * r);
  circle.setFilled(true);
  circle.setColor(color);
  return circle;
}
