const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

const menuBtn  = document.querySelector(".menu-btn");
const navMenu  = document.querySelector(".menu");
const scrollUp  = document.querySelector(".scroll-up-btn");

var box  = document.getElementById('navbar');
var logo = document.getElementById('logo');


// click listeners for small screen size menu. The virtical one 
document.querySelectorAll(".menu").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
}))


//scroll functions for sticky nav bar and the scroll to top button 
function myFunction() {
  if (window.scrollY >= 20) {
    box.style.background = "crimson";
    logo.style.color = "white";
  } else {
    box.style.background = "rgba(3, 3, 3, 0.8)";
    logo.style.color = "crimson";
  }

  if (window.scrollY >= 100) {
    scrollUp.classList.add("show");
  } else {
    scrollUp.classList.remove("show");
  }
}

// works for three bars on top right when using small display screen
function clickFunction() {
    menuBtn.addEventListener("click", () =>{
    navMenu.classList.toggle("active");
})
}

//the scroll to top button function
function scrollUpDoc() {
    window.scrollTo(0,0);
}

// typing animation
var typed = new Typed(".typing", {
  strings: [ "Software Engineer.","Web Developer.", "Android Developer.", "Freelancer." ],
  typeSpeed: 100,
  backSpeed: 60,
  loop:true
});

var typed = new Typed(".typing_2", {
  strings: [ "Software Engineer.","Web Developer.", "Android Developer.", "Freelancer." ],
  typeSpeed: 100,
  backSpeed: 60,
  loop:true
});