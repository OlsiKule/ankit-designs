// Hide navbar on scroll up
const navbar = document.querySelector('.navbar');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  // looks at the Y coordinates on page and compares current page positioning with previous one to show or hide navbar
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove('hide');
  } else {
    navbar.classList.add('hide');
  }
  prevScrollPos = currentScrollPos;
});


// Toggle navbar to sticky
window.onscroll = function () {
  let navbar = document.querySelector('.navbar');
  let hero = document.querySelector('.hero');
  let contentTop = hero.offsetTop; //+ 50 Adjust offset as needed

  if (window.pageYOffset > contentTop) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
};

// Hamburger menu
const hamburger = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__menu');
const closeMenu = document.querySelector('.closeMenu');
// console.log(closeMenu, 'closeMenu was clicked');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('onOff');
  menu.classList.toggle('has-fade');
  menu.classList.toggle('hide');
});

closeMenu.addEventListener('click', () => {
  closeMenu.classList.toggle('open');
  menu.classList.toggle('hide');
  hamburger.classList.toggle('onOff');
  menu.classList.toggle('has-fade');

});


// FAQ's
/*
  Coder: Katherine Cato
  Website: https://codepen.io/kathykato/details/MoZJom
  Description: This code was written by Katherine Cato.
*/

const items = document.querySelectorAll(".faq__accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
