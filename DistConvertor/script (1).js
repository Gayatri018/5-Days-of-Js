function convert() {
  let cm = document.getElementById('cm');
  let m = cm.value / 100;
  let resultText = "Converted value: " + m + " meters";
  let resultElement = document.getElementById('result');
  resultElement.innerHTML = resultText;
}
