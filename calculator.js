const container = document.querySelector('#container');
const numpad = document.querySelector('#numpad');

for (i = 1; i < 10; i++) {
    let tempBtn = document.createElement('button');
    tempBtn.setAttribute('id', `button${i}`);
    tempBtn.setAttribute('class', 'numButton');
    tempBtn.setAttribute('value', i);
    tempBtn.textContent = i;
    numpad.appendChild(tempBtn);
}