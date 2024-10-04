// basic example
// function myName() {
//   console.log("savan patel");
// }
// myName();




// another example
// function addNumbers(a, b){
//     console.log(a + b);
// }
// addNumbers(5, 10);
// // addNumbers(5,"10");

// OR

// function addNumbers(a, b) {
//   let result = a + b;
//   return result;
// }

// let sum = addNumbers(5, 10);
// console.log(sum);





// // return multiple values
// function multiple(val1,val2,...val3){
//     return val3
// }
// console.log(multiple(1,2,3,4,5,6,7,8,9,10));   // 3, 4,  5, 7, 8, 9, 10




// // function with object
// const user = {
//   name: "savan",
//   age: 24,
//   city: "surat",
// };

// function handleobject(obj){
//     console.log(`my name is ${obj.name}, my age is ${obj.age}, my city is ${obj.city}`);
// }

// handleobject(user);




// function with array
const newArray = [100,500,700,600,1000];

function functionwitharray(getarrayvalue){
    return getarrayvalue[2];  // 700
}

console.log(functionwitharray(newArray));