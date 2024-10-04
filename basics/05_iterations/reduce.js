const mynum = [1, 2, 3, 4, 5];

// const mytotal = mynum.reduce(function (startnum,curruntnum) {
//     console.log(`start from ${startnum} and currunt value ${curruntnum}`);
//     return startnum + curruntnum;
// },0 );

//or

// const mytotal = mynum.reduce( (startnum,curruntnum) => startnum + curruntnum );
// console.log(`total from ${mytotal}`);


// ************** other example

const totalitems = [
    {name: 'apple', price: 10},
    {name: 'banana', price: 5},
    {name: 'orange', price: 15}
]

const totalPrice = totalitems.reduce((total, item) => total + item.price, 0);
console.log(`Total price of all items: ${totalPrice}`);