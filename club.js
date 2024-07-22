document.addEventListener('DOMContentLoaded', () => {

    // Countdown Timer for Next Event
    function initializeCountdown() {
      const countdownElement = document.getElementById('countdown');
      const eventDate = new Date('2024-08-01T00:00:00'); // Replace with your event date and time
  
      function updateCountdown() {
        const now = new Date();
        const timeDifference = eventDate - now;
        
        if (timeDifference <= 0) {
          countdownElement.innerHTML = "The event is here!";
          return;
        }
  
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        countdownElement.innerHTML = `
          <div>${days} Days</div>
          <div>${hours} Hours</div>
          <div>${minutes} Minutes</div>
          <div>${seconds} Seconds</div>
        `;
      }
  
      updateCountdown();
      setInterval(updateCountdown, 1000);
    }
  
    initializeCountdown();
  
    // Image Slideshow for Gallery
    function initializeSlideshow() {
      const slides = document.querySelectorAll('.gallery .card-img-top');
      let currentSlide = 0;
  
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.style.display = (i === index) ? 'block' : 'none';
        });
      }
  
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }
  
      function previousSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      }
  
      document.getElementById('nextSlide').addEventListener('click', nextSlide);
      document.getElementById('prevSlide').addEventListener('click', previousSlide);
  
      showSlide(currentSlide);
    }
  
    initializeSlideshow();
  
    // Form Validation
    document.getElementById('contactForm').addEventListener('submit', (event) => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill in all fields.');
      }
    });
  
  });
  