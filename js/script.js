// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDarkBlue');
    }
    else {
        header.classList.remove('navbarDarkBlue');
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  function animated() {
    var animated = document.querySelectorAll(".animated");
  
    for (var i = 0; i < animated.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = animated[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        animated[i].classList.add("bounce");
      } else {
        animated[i].classList.remove("bounce");
      }
    }
  }
  
  window.addEventListener("scroll", animated);