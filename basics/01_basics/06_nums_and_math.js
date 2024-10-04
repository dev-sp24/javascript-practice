// let num = 5000;

// console.log(num);

// // display type of number 
// console.log(typeof num);


//convert into string
// let numToString = num.toString();
// console.log(numToString);
// console.log(typeof numToString);


//fixed number
// let fixedNum = num.toFixed(2);  //5000.00
// console.log(fixedNum);
// console.log(typeof fixedNum);


//precision value
// let prenumber = 189.93547;
// console.log(prenumber.toPrecision(4));


//localstring value
// let localnumber = 50000000;
// console.log(localnumber.toLocaleString('en-IN'));




// **************************  Math ****************

// let mathnumber = 4;

// abs (absolute value - to +)
// let abs = -4;
// console.log(Math.abs(abs));


// round (rounding value) OR ceil (top value) OR floor (bottom value)
// let roundnum = 5.324;
// console.log(Math.round(roundnum));
// console.log(Math.ceil(roundnum));
// console.log(Math.floor(roundnum));


//sqrt (squareroot)
// let sqrtnum = 25;
// console.log(Math.sqrt(sqrtnum));


//pow (power)
// let pownum = 3;
// let powernum = 4;
// console.log(Math.pow(powernum,pownum));


// min OR max
// let num = [10,96,75,36,42,11,95,44];
// console.log(Math.min(...num));
// console.log(Math.max(...num));
// ... dots used for call array otherwise output will be display Nan value 


// random (random number between 0 and 1)
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10) + 1);  //random number between 1 to 10

// min value 10 and max value 20
// let min = 10;
// let max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);