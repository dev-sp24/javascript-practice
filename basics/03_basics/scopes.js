
// {} known as scope

// // global scope
// let a = 10;
// let b = 20;

// // inner(block) scope
// if (true){
//     let a = 100;
//     let b = 200;
//     console.log("inner", a);
// }

// console.log("global", a);



// normal example

console.log(numone(3));
function numone(num1){
    return num1 + 5
}




// store function in variable

//console.log(numtwo(6));    before declare variable first after that assign value
const numtwo = function(num2){
    return num2 * 5
}
console.log(numtwo(6));