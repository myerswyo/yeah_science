
function collatzSteps(num){
  if(num === 1) return 0;
  else{
    let newNum = num%2 === 0 ? num/2 : (3 * num) + 1;
    return 1 + collatzSteps(newNum);
  }
}

function testSteps(x) {
  console.log("number of collatz steps for " + x + " is " + collatzSteps(x));

}

// console.log("max of -3 and -6: " + max(-3,-6));
// console.log("max of 6 and 6: " + max(6,6));
