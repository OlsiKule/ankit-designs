// Hide navbar on scroll up
const navbar = document.querySelector('.navbar');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
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
  let roadmap = document.querySelector('.roadmap');
  let contentTop = roadmap.offsetTop + 50; // Adjust offset as needed

  if (window.pageYOffset > contentTop) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
};

// Hamburger menu
// const btnHamburger = document.querySelector("#btnHamburger");
// const body = document.querySelector("body");
// const header = document.querySelector(".header");
// const overlay = document.querySelector(".overlay");
// const fadeElems = document.querySelectorAll(".has-fade")

// btnHamburger.addEventListener("click", function(){
//     // console.log("click hamburger");

//     if(header.classList.contains("open")){ //Close hamburger menu
//         body.classList.remove("noscroll")
//         header.classList.remove("open");
//         fadeElems.forEach(function(element){
//             element.classList.remove("fade-in")
//             element.classList.add("fade-out")
//         })

//     }else{ //Open hamburger menu
//         body.classList.add("noscroll")
//         header.classList.add("open");
//         fadeElems.forEach(function(element){
//             element.classList.remove("fade-out")
//              element.classList.add("fade-in")
//         })
//     }
// }) ;

const hamburger = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__menu');
const closeMenu = document.querySelector('.closeMenu');
console.log(closeMenu, 'closeMenu was clicked');

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
