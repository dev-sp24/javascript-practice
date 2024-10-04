// // example
// const exampleone = {
//   username: "savan",
//   age: 21,

//   details: function() {
//     console.log(`Hello, my name is ${this.username} and I am ${this.age} years old.`);
//   },
// };
// console.log(exampleone.username);
// exampleone.details();
// exampleone.username = "patel";
// exampleone.details();




// // in function this keyword does not exist
// function ourdetails() {
//   let myname = "John";
//   console.log(this.myname);
// }
// ourdetails();



// *******  arrow functions

// note The return keyword should not be written inside the parentheses ()
// The return keyword should be written inside the Curly brackets {}

// explicit example
const arrowex = (num1, num2)=> {
    return num1 * num2;
    }
    
    console.log(arrowex(10, 5));
    
    // use parentheses () 
    const arrowex3 = (num1, num2)=> ( num1 * num2 );
    
    console.log(arrowex3(3, 5));
    
    
    
    
    // implicit example (oneline code)
    const arrowex2 = (num1, num2)=> num1 * num2;
    
    console.log(arrowex2(5, 5));
    
    
    