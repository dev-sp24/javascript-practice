// let numbers = 50;

// if (numbers > 40) {
//   console.log("Number is greater than 40");
// } else {
//   console.log("Number is less than or equal to 40");
// }


// multiple conditions
let a = 10;
let b = 20;
let c = 30;

if (a > b && a > c) {
  console.log("number is grater than b and c");
} 
else if (b > c && b > a) {
  console.log("number is grater than a and c");
}
else if (c > b && b > a) {
  console.log("number is grater than a and b");
}
else{
  console.log("all numbers are equal");
}

// or
if ( b > a || b > c){
  console.log("number b is",b);
}
else{
  console.log("number is different");
}