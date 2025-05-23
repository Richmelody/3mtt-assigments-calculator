let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.textContent === '0' || display.textContent === 'Error') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    display.textContent = '0';
}

function backspace() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function calculate() {
    try {
        let expression = display.textContent
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        let result = eval(expression);
        display.textContent = result;
    } catch {
        display.textContent = 'Error';
    }
}
