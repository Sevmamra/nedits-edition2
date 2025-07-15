// AOS Initialize (only for sections where needed)
AOS.init({
  disable: 'mobile'
});

// ======================================
// Hero Section Random Slideshow
// ======================================

const heroSection = document.querySelector('.hero');
const heroImages = [
  'images/hero-bg/hero-bg1.jpg',
  'images/hero-bg/hero-bg2.jpg',
  'images/hero-bg/hero-bg3.jpg',
  'images/hero-bg/hero-bg4.jpg',
  'images/hero-bg/hero-bg5.jpg',
  'images/hero-bg/hero-bg6.jpg',
  'images/hero-bg/hero-bg7.jpg',
  'images/hero-bg/hero-bg8.jpg'
  // Add as many as you upload
];

let previousIndex = -1;

function getRandomImage() {
  let index;
  do {
    index = Math.floor(Math.random() * heroImages.length);
  } while (index === previousIndex);
  previousIndex = index;
  return heroImages[index];
}

function changeHeroBackground() {
  const newBg = getRandomImage();
  heroSection.style.backgroundImage = `url('${newBg}')`;
}

setInterval(changeHeroBackground, 4000);

// ======================================
// Welcome Board & Text Animation
// ======================================

window.addEventListener('load', () => {
  const board = document.querySelector('.board-container');
  const welcome = document.querySelector('.final-welcome-container');

  // Animate Board Drop
  board.style.animation = 'dropBoard 4s ease forwards';

  // After 4s, show welcome text permanently
  setTimeout(() => {
    welcome.style.opacity = '1';
    welcome.style.transform = 'translate(-50%, -50%) scale(1)';
  }, 4000);

  // Animate Testimonials on load
  animateTestimonials();
});

// ======================================
// Explore Button (Bouncing is only its own animation, no interference)
// ======================================
// Already handled by CSS @keyframes bounce

// ======================================
// Services Card Border Rotate + Icon Tilt
// ======================================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
    card.classList.toggle('tilt');
  });
});

// ======================================
// About Section Typing Effect
// ======================================

const aboutText = document.getElementById('about-text');
const fullText = aboutText.textContent;
aboutText.textContent = '';
let idx = 0;

function typeWriter() {
  if (idx < fullText.length) {
    aboutText.textContent += fullText.charAt(idx);
    idx++;
    setTimeout(typeWriter, 30);
  }
}

window.addEventListener('load', () => {
  setTimeout(typeWriter, 500);
});

// ======================================
// Testimonials Alternate Animation
// ======================================

function animateTestimonials() {
  const testimonials = document.querySelectorAll('.testimonial');
  
  testimonials.forEach((el, index) => {
    if (index % 2 === 0) {
      el.classList.add('testimonial-left');
    } else {
      el.classList.add('testimonial-right');
    }
  });
}
