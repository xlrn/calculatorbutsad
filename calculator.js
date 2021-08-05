const container = document.querySelector('#container');

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
        if (display.textContent == '0') {
            value = e.textContent;
        } else value = display.textContent + e.textContent;
        updateValue(value);
    })
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', function() {
    operand = "add";
    saveValue(display.textContent);
    console.log("addition mode set");
    display.textContent = 0;
});

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', function() {
    let curr = parseInt(display.textContent);
    let total = 0;
    console.log(curr);
    console.log(savedValue);
    switch(operand) {
        case "add":
            total = add(savedValue, curr);
            updateValue(total);
            break;
        case "subtract": 
            total = subtract(savedValue, curr);
            updateValue(total);
            break;
        case "multiply":
            total = multiply(savedValue, curr);
            updateValue(total);
            break;
        case "divide":
            total = divide(savedValue, curr);
            updateValue(total);
            break;
    }
})

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

let operand = "";
let savedValue = 0;

function saveValue(value) {
    savedValue = parseInt(value);
}

const display = document.querySelector('#current');

function updateValue(value) {
    display.textContent = value;
}


