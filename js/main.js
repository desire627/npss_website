 const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });


    document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    let current = 0;

    function showNextSlide() {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }

    setInterval(showNextSlide, 4000); // Switch every 4 seconds
  });
  
  const scrollBtn = document.querySelector(".scroll-up");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  });
  
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                // In a real implementation, this would open a lightbox
                alert('This would open a larger view of the image in a proper implementation.');
            });
        });

        function toggleChatbot() {
    const chatbot = document.getElementById('chatbotWindow');
    chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
  }

  function sendMessage() {
    const input = document.getElementById('userInput');
    const msg = input.value.trim();
    if (msg === '') return;

    const chatBox = document.getElementById('chatMessages');
    chatBox.innerHTML += `<div class="message user">${msg}</div>`;

    // Simple bot response
    setTimeout(() => {
      chatBox.innerHTML += `<div class="message bot">Thanks for reaching out! We'll respond shortly.</div>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);

    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }