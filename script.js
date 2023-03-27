const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
  const displayValue = calculatorDisplay.textContent;

  calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}

function addDecimal() {
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

inputBtns.forEach((inputBtn) => {
  if (inputBtn.cl.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value))
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value))
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal())
  } 
})

function resetAll() {
  calculatorDisplay.textContent = '0';  
}

clearBtn.addEventListener('click', resetAll);