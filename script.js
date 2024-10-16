// Link to your Google Apps Script Web App URL
// Replace 'YOUR_WEB_APP_URL' with the actual URL from your Google Apps Script
const scriptURL = 'https://script.google.com/macros/s/11CIbucGpMDfoRdH_8kTDDcv7cRbvQe-KJBB1tlTC_DCD3jm2vUSL5Pti/exec';

const form = document.getElementById('education-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Create a FormData object to capture form data
  const formData = new FormData(form);

  // Send the form data to Google Sheets using fetch
  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        alert('Form submitted successfully!');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    });
});

// Slide content: 5 images and 5 quotes
const slides = [
    {
        image: 'https://via.placeholder.com/600',
        quote: '"Success is not the key to happiness. Happiness is the key to success."'
    },
    {
        image: 'https://via.placeholder.com/600/ff0000',
        quote: '"Don’t watch the clock; do what it does. Keep going."'
    },
    {
        image: 'https://via.placeholder.com/600/00ff00',
        quote: '"Opportunities don’t happen. You create them."'
    },
    {
        image: 'https://via.placeholder.com/600/0000ff',
        quote: '"Success usually comes to those who are too busy to be looking for it."'
    },
    {
        image: 'https://via.placeholder.com/600/f39c12',
        quote: '"Don’t be afraid to give up the good to go for the great."'
    }
];

let currentSlide = 0;

function changeSlide() {
    const imageElement = document.getElementById('slide-image');
    const quoteElement = document.getElementById('slide-quote');

    // Change the image and quote
    imageElement.src = slides[currentSlide].image;
    quoteElement.textContent = slides[currentSlide].quote;

    // Move to the next slide, or loop back to the first one
    currentSlide = (currentSlide + 1) % slides.length;
}

// Change the slide every 5 seconds
setInterval(changeSlide, 5000);
  

// Get modal element
const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.getElementById("closeBtn");

// Open modal on login button click
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// Close modal on close button click
closeBtn.onclick = function() {
    loginModal.style.display = "none";
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
}

// Optional: Handle form submission
document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault();
    // Handle login logic here
    alert("Logged in successfully!"); // Just an example alert
    loginModal.style.display = "none"; // Close modal on submit
}
