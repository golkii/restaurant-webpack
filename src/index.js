import { homeGenerate } from "./homeGenerate";
import { menuGenerate } from "./menuGenerate";
import { contactsGenerate } from "./contactsGenerate";
import './style.css';

let content = document.getElementById('content');
let buttons = document.createElement('div');

let button1 = document.createElement('button');
let button2 = document.createElement('button');
let button3 = document.createElement('button');

buttons.append(button1, button2, button3);
document.body.prepend(buttons);

button1.disabled = true;
homeGenerate();

button1.textContent = 'home';
button1.addEventListener('click', e => {
  content.innerHTML = '';
  homeGenerate();
  button1.disabled = true;
  button2.disabled = false;
  button3.disabled = false;
});

button2.textContent = 'menu';
button2.addEventListener('click', e => {
  content.innerHTML = '';
  menuGenerate();
  button1.disabled = false;
  button2.disabled = true;
  button3.disabled = false;
});


button3.textContent = 'contacts';
button3.addEventListener('click', e => {
  content.innerHTML = '';
  contactsGenerate();
  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = true;
});