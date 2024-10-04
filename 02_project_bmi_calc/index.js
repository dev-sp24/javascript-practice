
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid height and weight values.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let resultText = `Your BMI is ${bmi}. `;

    if (bmi < 18.5) {
        resultText += "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += "You have a normal weight.";
    } else {
        resultText += "You are overweight.";
    }

    document.getElementById('result').innerHTML = resultText;
}
