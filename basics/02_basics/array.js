const myArray = [1,2,3,4,5,6,7,8,9];
const myGames =["cricket", "hockey", "football"];

// console.log(myArray);
// console.log(myArray[5]);


// ********** array methods

// push (used for add new value in array)
// myArray.push(10);
// console.log(myArray);


// // pop (used for delete last one value in array)
// myArray.pop();
// console.log(myArray);


// // shift (used for delete first one value in array)
// // unshift (used for add new value in array starting)
// myArray.shift();
// console.log(myArray);

// myArray.unshift(1);
// console.log(myArray);


// // inclues (used for find value in array or not)
// console.log(myArray.includes(5));
// console.log(myArray.includes(11));


// // indexof (used for get index of values)
// console.log(myArray.indexOf(5));
// console.log(myArray.indexOf(11));


// // length (used for find length of array)
// console.log(myGames.length);


// // join (used for joins all array elements into a string.)
// console.log(myGames.join(' + '));


// // tostrings (used for converts an array to a string)
// console.log(myGames.toString());


// // slice (used for slices out a piece of an array into a new array:)
// console.log(myArray.slice(2, 4));


// // splice 
// //The splice() method can be used to add new items to an array:
// //The first parameter (2) defines the position where new elements should be added (spliced in).

// myGames.splice(2, 0, 'bedminton', 'basketball');
// console.log(myGames);



// // flat (used for creates a new array with sub-array elements concatenated to a specified depth)
// let arrayone = [[100,200],[300,400],[500,600],[700,800]];
// let arrarflat = arrayone.flat();
// console.log(arrarflat);



// // convert values to array
// let score1 = 1000;
// let score2 = 2000;
// let score3 = 3000;

// console.log(Array.of(score1,score2,score3));
// console.log(Array.from("savan patel"));
// // of and from working same



// concate  (used for merge two or more arrays)
// const suzukiCars = ["brezza", "swift", "baleno", "fronx"];
// const hondaCars = ["creta","hondacity","verna","venue"];
// const tataCars = ["punch", "tiago", "nexon", "tigor"];

// const myCars = suzukiCars.concat(hondaCars, tataCars);
// console.log(myCars);

//OR

// const myallCars = [...hondaCars, ...suzukiCars, ...tataCars];
// console.log(myallCars);