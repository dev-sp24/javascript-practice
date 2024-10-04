const input = document.getElementById("text");
const buttons = document.querySelectorAll(".button");

let currentData = "";

// Valid characters (numbers and operators)
const validCharacter = "0123456789+-*/.%";

// Handle button clicks
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const value = e.target.getAttribute("data-value");

    // AC (All Clear)
    if (value === "AC") {
      currentData = ""; // clear the value
      input.value = "";
    } else if (value === "=") {
      try {
        input.value = eval(currentData); // evaluate the value
        currentData = input.value;
      } catch (error) {
        input.value = "Error"; // input error in value
        currentData = ""; // reset input value
      }
    } else if (value === "backspace") {
      // Backspace button
      currentData = currentData.slice(0, -1);
      input.value = currentData;
    } else if (validCharacter.includes(value)) {
      // Only add valid characters
      currentData += value;
      input.value = currentData; // display current value
    }
  });
});

// Handle keyboard input
document.addEventListener("keydown", function (e) {
  const key = e.key;

  // Allow numeric characters, basic operators, and certain keys
  if (
    (validCharacter.includes(key) && key.length == 1) ||
    key === "Enter" ||
    key === "Backspace"
  ) {
    if (key === "Enter") {
      try {
        input.value = eval(currentData); // evaluate the value
        currentData = input.value;
      } catch (error) {
        input.value = "Error"; // input error in value
        currentData = ""; // reset input value
      }
    } else if (key === "Backspace") {
      // Handle backspace key
      currentData = currentData.slice(0, -1);
      input.value = currentData;
    } else {
      // Add valid characters
      currentData += key;
      input.value = currentData;
    }
  } else {
    // Prevent invalid input (non-numeric, non-operator characters)
    e.preventDefault();
  }
});