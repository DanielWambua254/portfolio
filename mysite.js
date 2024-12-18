const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll(".navbar .menu li a");
const menuBtn  = document.querySelector(".menu-btn");
const navMenu  = document.querySelector(".menu");
const scrollUp  = document.querySelector(".scroll-up-btn");

var box  = document.querySelector(".navbar");
var logo = document.getElementById('logo');


// click listeners for small screen size menu. The virtical one 
document.querySelectorAll(".menu").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
}))
mysite.js
mysite.js
//scroll functions for sticky nav bar and the scroll to top button 
function myFunction() {
  if (window.scrollY >= 20) {
    box.classList.add("sticky");
    logo.style.color = "white";
  } else {
    box.classList.remove("sticky");
    logo.style.color = "#4169E1";
  }

  if (window.scrollY >= 100) {
    scrollUp.classList.add("show");
  } else {
    scrollUp.classList.remove("show");
  }

  //calls the nav selector method
  activeClassSelector();

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

//changes acive class

function activeClassSelector() {
  let currentSection = '';

  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;


    if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
      currentSection = section.getAttribute("id");
    }

    navLi.forEach( a => {
      a.classList.remove("activeNav");

      if(a.classList.contains(currentSection)) {
        a.classList.add("activeNav");
      }
    })
  })
}