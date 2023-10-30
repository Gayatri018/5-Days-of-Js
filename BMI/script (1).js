function BMI() {
  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;
  let result = weight / (height * height);

  let resultElement = document.getElementById('result');

  if (result < 18.5) {
    resultElement.innerText = 'Underweight';
  } else if (result < 25) {
    resultElement.innerText = 'Normal weight';
  } else if (result < 30) {
    resultElement.innerText = 'Overweight';
  } else {
    resultElement.innerText = 'Obesity';
  }
}
