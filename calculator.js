const container = document.querySelector('#container');

for (i = 1; i < 10; i++) {
    let tempBtn = document.createElement('button');
    tempBtn.setAttribute('id', `button${i}`);
    tempBtn.setAttribute('class', 'numButton');
    tempBtn.setAttribute('value', i);
    tempBtn.textContent = i;
    container.appendChild(tempBtn);
}