let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("testimonials-slide");
  let dots = document.getElementsByClassName("dot");
  let avatars = document.getElementsByClassName("testimonialsImg")
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex"
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
} 