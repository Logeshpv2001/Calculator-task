let memory = 0;

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function performOperation(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}

function calculateResult() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid expression');
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function addToMemory() {
    const display = document.getElementById('display');
    memory += parseFloat(display.value) || 0;
    clearDisplay();
}

function subtractFromMemory() {
    const display = document.getElementById('display');
    memory -= parseFloat(display.value) || 0;
    clearDisplay();
}

function clearMemory() {
    memory = 0;
}

// Handle keyboard events for numbers
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const isNumber = /[0-9]/.test(key);

    if (isNumber) {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        performOperation(key);
    } else {
        alert('Only numbers are allowed');
    }
});
