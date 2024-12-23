let resultInput = document.getElementById('result');

// Add a value to the input
function Value(value) {
  resultInput.value += value;
}

// Clear the input
function deleteResult() {
  resultInput.value = '';
}

// Calculate the result
function calculateResult() {
  try {
    resultInput.value = eval(resultInput.value);
  } catch (error) {
    resultInput.value = 'Error';
  }
}