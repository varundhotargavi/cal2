let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    if (currentInput.length < 10) { // Limit display to 10 characters
        currentInput += number;
        updateDisplay();
    }
}

function setOperator(op) {
    if (currentInput === '') return; // Do nothing if there's no input
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return; // Check for NaN

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1); // Remove the last character
    updateDisplay();
}

function updateDisplay() {
    const display = document.querySelector('.display');
    display.innerText = currentInput || '0';
}
