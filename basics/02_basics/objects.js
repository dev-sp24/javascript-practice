// object literal

// const myobject = {
//     firstName : "savan",
//     lastName : "patel",
//     age : 24,
//     gender : "male",
//     email : "savan123@gmail.com",
//     address : {
//         street : "123 Main St",
//         city : "surat",
//         state : "gujarat"
//     }
// }

// console.log(myobject.firstName);
// console.log(myobject.address);
// console.log(myobject.address.city);



// // singleton object
// const singleton = new Object();
// console.log(singleton);



// // nonsingleton object
// const nonsingleton = {}
// console.log(nonsingleton);



// // combine one or more object
// const object1 = {1: "a", 2: "b", 3: "c", 4: "d"};
// const object2 = {5: "e", 6: "f", 7: "g", 8: "h"};

// // const objectCombine = Object.assign(object1, object2);
// const objectCombine = {...object1, ...object2};
// console.log(objectCombine);





// ********* object de-structuring ********

const cource ={
    courcename: "javascript",
    instructor: "John Doe",
    duration: 60
}

const {instructor} = cource
console.log(instructor);