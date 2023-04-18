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
document.querySelector('.header');
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
