 const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

     document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
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

  function showImage(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}


// Lightbox functionality
    document.addEventListener('DOMContentLoaded', function() {
        // Create lightbox container
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);
        
        // Get all gallery items
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                // Get the image source
                const imgSrc = this.querySelector('img').src;
                const caption = this.querySelector('.gallery-overlay p').textContent;
                
                // Create lightbox content
                lightbox.innerHTML = `
                    <div class="lightbox-content">
                        <img src="${imgSrc}" alt="${caption}">
                        <div class="lightbox-caption">${caption}</div>
                        <span class="close-btn">&times;</span>
                    </div>
                `;
                
                // Display lightbox
                lightbox.style.display = 'flex';
                
                // Close lightbox
                lightbox.querySelector('.close-btn').addEventListener('click', () => {
                    lightbox.style.display = 'none';
                });
            });
        });
        
        // Close when clicking outside image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    });

    const slider = document.querySelector('.stories-slider');
    let scrollAmount = 0;

    setInterval(() => {
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
            scrollAmount = 0;
        } else {
            scrollAmount += 320; // adjust based on card width + gap
        }
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }, 7000);