/* global GWindow, GOval, GRect */


const WINDOWWIDTH = 800;
var gw;
var count = 0;

function draw() {
  gw = GWindow(WINDOWWIDTH, WINDOWWIDTH);
  let rect = GRect(600,400);
  let oval = GOval(300,300);
  rect.setColor("#000");
  drawOval(300, 300, 300);

}

function drawOval(x, y, d){
  let rect = GRect(x, y, d, d);
  let oval = GOval(x, y, d, d);
  oval.setFilled(false);
  gw.add(oval);
  // gw.add(rect);
  count++;
  console.log(count + "..  drawing another oval with size of " + d);
  if(x < WINDOWWIDTH && d < 100){   // width of window
    setTimeout(drawOval, 500, x + d * .5, y, d * .75);
    setTimeout(drawOval, 500, x - d * .5, y, d* .75);
  }
  // // if(x < WINDOWWIDTH && d > 20){   // width of window
  // //   setTimeout(drawOval, 500, x + 35, y - 35, d * .75);
  // // }
  // if(x > 200 && d > 24){
  //   setTimeout(drawOval, 500, x - 35, y, d* .75);
  // }
  // if(x > 200 && d > 20){
  //   setTimeout(drawOval, 500, x - 35, y + 35, d* .75);
  // }
}
