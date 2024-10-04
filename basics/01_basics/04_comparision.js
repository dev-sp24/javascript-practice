// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);


// console.log(null == 0);
// console.log(null >= 0);
// console.log(null <= 0);


// console.log("2" == 2);  //its check only two values
// console.log("2" === 2); // its check datatypes and value both that's why it is false 


// *************  primitive types ****************

// 7 types => string, number, boolean, null, undefined, symbol, bigint




// *************  non-primitive(reference) types ****************

// array, objects, functions

// array
const names = ["savan", "nikhil", "nensi", "shreyanshi", "ripal"];
console.log(names.length);
console.log(names[4]);
console.log(names[5]);
console.log(names);

//objects
let details = {
    name: "savan",
    age: 24,
    city: "SURAT"
}
console.log(details.name);

//functions

function myFunction(){
    console.log("hello..");
}
myFunction();



// ******************* Heap & stack *****************

// stack (primitive)
// heap (non primitive)

