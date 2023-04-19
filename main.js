'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
};

const closeModal = function () {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
   }
});






///////////// selecting elements 
console.log(document.doucmentElement);
console.log(document.head);
console.log(document.body);

// for selecting multiple element use document.querySelectorAll
const header = document.querySelector('.header');
// we use the above alot when we want to select child elements 

const allSection = document.querySelectorAll('.section');

console.log(allSection);

document.getElementById('section--1')// here we only pass idname without the selector 

const allButtons = document.getElementsByTagName('button');

console.log(allButtons);
// this method actually return all the html collection 
// if the dom changes this also update automatically 

// this won't happend with node list 

console.log(document.getElementsByClassName('btn'));

/////////////// Creating and inserting elements

// .insertAdjecentHTML   is used in Bankist  to create movements 
// quick and easy way 

// some other ways to create and knserting elements 

const message = document.createElement('div') // this div will create dom  element , all this is the dom object 

message.classList.add('cookie-message');
// message.textContent = 'We use cookies for imporved functionality and analytics.';
message.innerHTML = 'We use cookies for imporved functionality  and analytics. <button class = "btn btn--close-cookie">Got it! </button>';


// header.prepend(message);
// prepend : its basically adds the element as the first child of this( in this case header) element
header.append(message);
// append : its basically adds the element as the last child of this (in this case header) element


// we can also  use before and after

// header.after(message);
// header.before(message);

// delete Elements
// Remove the message 

document.querySelector('.btn--close-cookie').addEventListener('click', function () {
   message.remove();
   // this remove method is recent update in javascipt
})



// style 
// this style is set as inline style
// directly in dom 
// only work for inline style 
message.style.backgroundColor = '#37383d';
message.style.width = '104%';

console.log(getComputedStyle(message));

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

// document.doucmentElement.style.setProperty('--color-primary', 'orangered');
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Smooth Scroll 

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');


btnScrollTo.addEventListener('click', function (e) {
   section1.scrollIntoView({ behavior: 'smooth' });
});
