const mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNumber = mynumber.filter( (num) => num >= 4 );

//or

// const newNumber = mynumber.filter( (num) => {
//     return num >= 4;
// })


// ******* using foreach

// const newNumber = [];
// mynumber.forEach( (num) => {
//     if (num >= 4) {
//         newNumber.push(num);
//     }
// });

// console.log(newNumber);


const mycarsdetails = [
    {
        carname: 'baleno',
        model: 'Suzuki',
        year: 2015
    },
    {
        carname: 'i20',
        model: 'Honda',
        year: 2018
    },
    {
        carname: 'slavia',
        model: 'skoda',
        year: 2017
    },
    {
        carname: 'tiago',
        model: 'Tata',
        year: 2019
    },
    {
        carname: 'swift',
        model: 'suzuki',
        year: 2020
    },
    {
        carname: 'virtus',
        model: 'vw',
        year: 2021
    },
    {
        carname: 'kushaq',
        model: 'skoda',
        year: 2022
    }
];

//const mynewcar = mycarsdetails.filter( (car) => car.model === 'skoda' );

const mynewcar = mycarsdetails.filter( (car) => {
    return car.model === 'skoda' && car.year >= 2020
});

// 

//console.log(mynewcar);




// //////////////////////  mix example

const mixNum = mynumber
      .map( (num) => num * 5)
      .filter( (num) => num >= 30 )   

      console.log(mixNum);