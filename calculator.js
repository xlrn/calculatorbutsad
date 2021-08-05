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
        if (display.textContent == "") {
            value = e.textContent;
        } else value = display.textContent + e.textContent;
        updateValue(value);
    })
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', function() {
    operand = "add";
    saveValue(display.textContent);
    display.textContent = "";
});

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', function() {
    operand = "subtract";
    saveValue(display.textContent);
    display.textContent = "";
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', function() {
    operand = "multiply";
    saveValue(display.textContent);
    display.textContent = "";
});

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', function() {
    operand = "divide";
    saveValue(display.textContent);
    display.textContent = "";
});

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', calculate);

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
            total = truncate(divide(savedValue, curr));
            updateValue(total);
            resetOperand();
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
    savedValue = parseInt(value);
}

function truncate(value) {
    let trungywungy = +value.toFixed(5);
    return trungywungy;
}


