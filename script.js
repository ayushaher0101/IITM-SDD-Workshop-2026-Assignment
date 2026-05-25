/**
 * @file Enterprise Calculator Logic
 * @version 1.2.0
 */

let currentInput = '0';
let previousInput = '';
let operation = null;

const currDisplay = document.getElementById('curr-operand');
const prevDisplay = document.getElementById('prev-operand');
const logList = document.getElementById('log-list');

/**
 * Pushes a formatted message to the UI audit trail.
 * @param {string} message 
 */
function logToAudit(message) {
    const li = document.createElement('li');
    const timestamp = new Date().toLocaleTimeString();
    li.textContent = `[${timestamp}] ${message}`;
    logList.prepend(li);
}

function updateDisplay() {
    currDisplay.innerText = currentInput;
    prevDisplay.innerText = operation ? `${previousInput} ${operation}` : '';
}

function appendNum(num) {
    if (currentInput === 'ERR: DIV/0') currentInput = '0';
    if (num === '.' && currentInput.includes('.')) return;
    if (currentInput === '0' && num !== '.') {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === 'ERR: DIV/0') return;
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(curr)) return;

    // Strict Error Handling
    if (operation === '/' && curr === 0) {
        currentInput = 'ERR: DIV/0';
        operation = null;
        previousInput = '';
        updateDisplay();
        logToAudit(`ERR: Attemped division by zero (${prev} / 0)`);
        return;
    }

    switch (operation) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = prev / curr; break;
        default: return;
    }

    logToAudit(`${prev} ${operation} ${curr} = ${result}`);

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    updateDisplay();
    logToAudit('Cleared calculator state');
}

function deleteLast() {
    if (currentInput === 'ERR: DIV/0') {
        currentInput = '0';
    } else {
        if (currentInput === '0') return;
        currentInput = currentInput.slice(0, -1);
        if (currentInput === '') currentInput = '0';
    }
    updateDisplay();
}

// Keyboard Accessibility
document.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) appendNum(e.key);
    if (e.key === '.') appendNum('.');
    if (e.key === '=' || e.key === 'Enter') {
        e.preventDefault(); 
        calculate();
    }
    if (e.key === 'Backspace') deleteLast();
    if (e.key === 'Escape') clearDisplay();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        setOperation(e.key);
    }
});
