const mycars = {
    baleno: "Suzuki",
    i20: "Honda",
    slavia: "Skoda",
    tiagun: "Volkswagen",
    tiago: "Tata",
  };
  
  for (const car in mycars) {
     // console.log(`${car}`);
  }
  
  for (const car in mycars) {
     // console.log(`${car}: ${mycars[car]}`);
  }
  //${mycars[car]} used for display values
  
  
  
  
  
  // for in loop in array
  
  const myfavcars = ["baleno","tiagun","slavia","virtus","kushaq"];
  
  for (const favcar in myfavcars) {
      //console.log(`${favcar}`);
  }
  
  for (const favcar in myfavcars) {
      console.log(`${favcar} == ${myfavcars[favcar]}`);
  }