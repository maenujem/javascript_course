import './styles/main.css'; // Load application wide styles
import $ from 'jquery'; // Import jquery library
import { sayHello, helloWidget } from './scripts/helloWidget'; // Import the exported functions

console.log('Hello main');

sayHello('me');

document.body.appendChild(helloWidget());
$('#hellowidget').click(function(){
    $(this).after($('<b></b>').text('Hello jQuery'));
});