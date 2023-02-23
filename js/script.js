// JavaScript code to toggle navbar visibility
// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector('.navbar').classList.add('upScroll');
//   } else {
//     document.querySelector('.navbar').classList.remove('upScroll');
//   }
//   prevScrollpos = currentScrollPos;
// }

// Get the navbar element
const navbar = document.querySelector('.navbar');

// Initialize the previous scroll position to the current scroll position
let prevScrollPos = window.pageYOffset;

// Add a scroll event listener to the window object
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const currentScrollPos = window.pageYOffset;

  // Check if the user is scrolling up
  if (prevScrollPos > currentScrollPos) {
    // Add the "hide" class to the navbar element
    navbar.classList.remove('hide');
  } else {
    // Remove the "hide" class from the navbar element
    navbar.classList.add('hide');
  }

  // Update the previous scroll position to the current scroll position
  prevScrollPos = currentScrollPos;
});




// JavaScript code to toggle navbar sticky class
window.onscroll = function() {
    let navbar = document.querySelector('.navbar');
    let roadmap = document.querySelector('.roadmap');
    let contentTop = roadmap.offsetTop + 50; // Adjust offset as needed
  
    if (window.pageYOffset > contentTop) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  }


// hamburger menu
const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade")

// btnHamburger.addEventListener("click", function(){
    // console.log("click hamburger"));


    // if(header.classList.contains("open")){ //Close hamburger menu 
    //     body.classList.remove("noscroll")
    //     header.classList.remove("open");
    //     fadeElems.forEach(function(element){
    //         element.classList.remove("fade-in")
    //         element.classList.add("fade-out")
    //     })
        

    // }else{ //Open hamburger menu 
    //     body.classList.add("noscroll")
    //     header.classList.add("open");
    //     fadeElems.forEach(function(element){
    //         element.classList.remove("fade-out")
    //          element.classList.add("fade-in")
    //     })
    // }
// })  