// function collatzNumber(n){
//
//       while (n > 1) {
//           if (n % 2 === 0) {
//               n = n/2;
// console.log(x);
// }else{ n = 3*n+1;
// console.log(x);}}};
//
// }


function abs(num) {
  if(num < 0){
    return (-num);
  }else{
    return num;
  }
}

function testAbs(){
  console.log("abs of -5 is: " + abs(-5) );
  console.log("abs of 7 is: " + abs(7) );
  console.log("abs of 0 is: " + abs(0) );

}

testAbs();

// Ternary Bruh

function max(x,y) {
  return (x > y) ? x : y ;
}

function testMax() {
  console.log("max of 3 and 6: " + max(3,6));
  console.log("max of -3 and -6: " + max(-3,-6));
  console.log("max of 6 and 6: " + max(6,6));
}

testMax();


function posOrNeg(x) {
  if (x < 0) {
    console.log(x + " is negative bruh");
  } else if (x > 0) {
    console.log(x + " is positive bruh");
  } else if (x === 0) {
    console.log(x + " is zero bruh");
  }
}

function testPosNeg(){
  posOrNeg(-5000);
  posOrNeg(-0);
  posOrNeg(55);
}

testPosNeg();

function monthName(month){
  switch(month) {
    case  1: return "January";
    case  2: return "February";
    case  3: return "March";
    case  4: return "April";
    case  5: return "May";
    case  6: return "June";
    case  7: return "July";
    case  8: return "August";
    case  9: return "September";
    case 10: return "October";
    case 11: return "November";
    case 12: return "December";
    default: return "wtf";

  }
}

function mirror(month){
  console.log("The month is " + monthName(month) );
}

mirror();

// CREATE STEP COUNTER

function largestFactor(numba) {
  let factor = numba - 1;
  while (numba % factor !== 0) {
    factor--;
  }
  return factor;
}


//value is a string --- width is a collatzNumber
function alignRight(value, width) {
  let str = "" + value;
  while(str.length < width) {
    str = " " + str;
  }
  return str;
}

console.log(alignRight("Mark", 20));
console.log(alignRight("Tom", 20));
console.log(alignRight("Cami", 20));
console.log(alignRight("Jesse", 20));
console.log(alignRight("Josh", 20));


function printNumbers() {
  for(let i = 0; i < 10; i++) {
    console.log(i);
  }
}

printNumbers();

function factorial(n) {
  let result = 1;
  for(let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
