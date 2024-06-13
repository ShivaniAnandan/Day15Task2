const display = document.getElementById('display');

document.addEventListener('keydown', (event) => {
    const key = event.key;
    // console.log(key);
    if (isFinite(key)) {
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    } else {
        alert('Only numbers and basic operators are allowed');
    }
});

function appendNumber(num) {
    display.value += num;
}

function appendOperator(op) {
    display.value += ` ${op} `;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        alert('Invalid Expression');
        clearDisplay();
    }
}

function clearDisplay() {
    display.value = '';
}

function memoryAdd() {
    const memory = parseFloat(localStorage.getItem('calculatorMemory')) || 0;
    localStorage.setItem('calculatorMemory', memory + parseFloat(display.value));
}

function memorySubtract() {
    const memory = parseFloat(localStorage.getItem('calculatorMemory')) || 0;
    localStorage.setItem('calculatorMemory', memory - parseFloat(display.value));
}

function memoryClear() {
    localStorage.removeItem('calculatorMemory');
}

function memoryRecall() {
    const memory = parseFloat(localStorage.getItem('calculatorMemory')) || 0;
    display.value = memory;
}
