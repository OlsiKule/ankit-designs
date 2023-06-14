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
const menuItems = document.querySelectorAll('.header__link');


hamburger.addEventListener('click', () => {
  // setTimeout(() => {
    hamburger.classList.toggle('onOff');
    menu.classList.toggle('has-fade');
    menu.classList.toggle('hide');
    
  // }, 300); // Delay in milliseconds (0.3 seconds)
  document.body.style.overflow = "hidden";
  document.body.style.userSelect = "none";
});

closeMenu.addEventListener('click', () => {
  closeMenu.classList.toggle('open');
  menu.classList.toggle('hide');
  hamburger.classList.toggle('onOff');
  menu.classList.toggle('has-fade');
  document.body.style.overflow = "auto";
  document.body.style.userSelect = "auto";
});

// close menu on any item click
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    setTimeout(()=>{

    event.preventDefault(); // Prevent default link behavior
      const targetSectionId = menuItem.getAttribute('href'); // Get the target section ID from the href attribute
      const targetSection = document.querySelector(targetSectionId); // Find the target section in the document

      if (targetSection) {
        // Close the menu
        closeMenu.classList.toggle('open');
        menu.classList.toggle('hide');
        hamburger.classList.toggle('onOff');
        menu.classList.toggle('has-fade');
        document.body.style.overflow = "auto";
        document.body.style.userSelect = "auto";

        // Scroll to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

    }, 100); // Delay in milliseconds to prevent the scrolling effect
    
  });
});

// FAQ's
/*
  Coder: Katherine Cato
  Website: https://codepen.io/kathykato/details/MoZJom
  Description: Parts of this code were written by Katherine Cato.
*/
const items = document.querySelectorAll(".faq__accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  } else if (itemToggle == 'true') {
    this.setAttribute('aria-expanded', 'false')
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


//   pointers events none 
