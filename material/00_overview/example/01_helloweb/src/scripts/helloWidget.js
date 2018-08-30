console.log('Hello widget');

export function sayHello(name) {
    console.log(`Hello function: ${name}`);
}

export function helloWidget() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello Widget - click on me';
    element.setAttribute('id', 'hellowidget');
    element.classList.add('hellostyle');
    return element;
}