function splitBill() {
  let amount = document.getElementById('amount');
  let persons = document.getElementById('persons');
  let result = amount.value / persons.value;
  let resultElement = document.getElementById('result');
  resultElement.innerText = result;
}
