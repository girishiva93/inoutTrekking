console.log("Hello");

window.addEventListener("scroll",bringmenu);

function bringmenu(){
    if(document.body.scrollTop>400 || document.documentElement.scrollTop>500){
        document.getElementById("discount-offer-table").style.display = 'none';
        // document.getElementById("explain-trip").style.display='none';
        document.getElementById("offer-header-2").style.fontSize = '18px';
    }
    else{
        document.getElementById("discount-offer-table").style.display = 'block';
        // document.getElementById("explain-trip").style.display='block';
        document.getElementById("offer-header-2").style.fontSize = '20px';
    }
}

// slide ko lagi

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}