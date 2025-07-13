let slideIndex = 0;
const gallery = document.getElementById("gallery");

function showSlide(index) {
  const totalSlides = gallery.children.length;
  if (index >= totalSlides) slideIndex = 0;
  if (index < 0) slideIndex = totalSlides - 1;
  gallery.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Auto slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);

// Booking button action
function bookTrip() {
  alert("Thank you for your interest! Booking feature coming soon.");
}
