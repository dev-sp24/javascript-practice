const map = new Map();
map.set('Gujarat', 'gandhinagar');
map.set('Rajasthan', 'jaipur');
map.set('Maharashtra', 'mumbai');

//console.log(map);

// for (const state of map) {
//     console.log(state);
// }

for (const [state, value] of map) {
    //console.log(state, '-', value);
}


// other example
const mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mynum = mynumber.map( (num) => {
    return num * 2;
} )
//console.log(mynum);