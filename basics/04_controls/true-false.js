// *********  truth value

// "0", "false", " ", [], {}, function(){}, 

const username = "savan";
if (username) {
    console.log("my name is", username);
}
else {
    console.log("my name is not defined");
}

//OR

const username2 = [];
if (username2) {
    console.log("my name is", username2);
}
else {
    console.log("my name is not defined");
}



// ********* false value

// false, 0, -0, bigint 0n, "" , null, undefined, NAN

const customername = "";
if (customername) {
    console.log("my name is", customername);
}
else {
    console.log("my name is not defined");
}

//or

const customername2 = 0;
if (customername2) {
    console.log("my name is", customername2);
}
else {
    console.log("my name is not defined");
}

