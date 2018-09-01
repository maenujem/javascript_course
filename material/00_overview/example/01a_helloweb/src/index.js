console.log('Hello main');

function sayHello(name) {
    console.log(`Hello function: ${name}`);
}

sayHello('me');


function helloWidget() {
    var element = document.createElement('div');
    element.innerHTML = 'Hello Widget - click on me';
    element.setAttribute('id', 'hellowidget');
    element.classList.add('hellostyle');
    return element;
}

document.body.appendChild(helloWidget());

$('#hellowidget').click(function(){
    $(this).after($('<b></b>').text('Hello jQuery'));
});

