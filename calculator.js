const container = document.querySelector('#container');
const display = document.querySelector('#current');

let operand = "";
let savedValue = 0;

for (i = 1; i < 10; i++) {
    let tempBtn = document.createElement('button');
    tempBtn.setAttribute('id', `button${i}`);
    tempBtn.setAttribute('class', 'numButton');
    tempBtn.setAttribute('value', i);
    tempBtn.textContent = i;
    container.appendChild(tempBtn);
}

let numpad = document.querySelectorAll('.numButton');
numpad.forEach(function(e) {
    e.addEventListener('click', function() {
        let value;
        if (display.textContent == "" || isNaN(display.textContent) || display.textContent == "0") {
            value = e.textContent;
        } else value = display.textContent + e.textContent;
        updateValue(value);
    })
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', function() {
    calculate();
    operand = "add";
    saveValue(display.textContent);
    display.textContent = "";
});

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', function() {
    calculate();
    operand = "subtract";
    saveValue(display.textContent);
    display.textContent = "";
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', function() {
    calculate();
    operand = "multiply";
    saveValue(display.textContent);
    display.textContent = "";
});

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', function() {
    calculate();
    operand = "divide";
    saveValue(display.textContent);
    display.textContent = "";
});

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', calculate);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function() {
    operand = "";
    updateValue(0);
})

function updateValue(value) {
    display.textContent = value;
}

function calculate() {
    let curr = parseInt(display.textContent);
    let total = 0;
    switch(operand) {
        case "add":
            total = truncate(add(savedValue, curr));
            updateValue(total);
            resetOperand();
            break;
        case "subtract": 
            total = truncate(subtract(savedValue, curr));
            updateValue(total);
            resetOperand();
            break;
        case "multiply":
            total = truncate(multiply(savedValue, curr));
            updateValue(total);
            resetOperand();
            break;
        case "divide":
            if (curr == 0) {
                total = "No."
                updateValue(total);
                savedValue = 0;
            } else {
            total = truncate(divide(savedValue, curr));
            updateValue(total);
            resetOperand();
            }
            break;
    }
}

function resetOperand() {
    operand = ""
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function saveValue(value) {
    if (isNaN(display.textContent)) {
        savedValue = 0;
    } else savedValue = parseInt(value);
}

function truncate(value) {
    let trungywungy = +value.toFixed(5);
    return trungywungy;
}

