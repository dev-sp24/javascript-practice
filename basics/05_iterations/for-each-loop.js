const mylanguage = ['html', 'css', 'javascript', 'c++', 'c#', 'SQl', 'python'];

mylanguage.forEach( function (language) {
   // console.log(language);
} );

//or

mylanguage.forEach( (language) => {
    //console.log(language);
});

//or
mylanguage.forEach( (language, index, arr) => {
   // console.log(language, index, arr);
});




// *************** objects in array

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
        model: 'Skoda',
        year: 2017
    },
    {
        carname: 'tiago',
        model: 'Tata',
        year: 2019
    }
];

mycarsdetails.forEach( (car) => {
   // console.log(car);
   // console.log(car.carname);
   // console.log(car.model);
   // console.log(`${car.carname} = ${car.model}`);
});