// =============================
// HERO BACKGROUND SLIDESHOW
// =============================

const hero = document.querySelector('.hero');
const heroOverlay = document.querySelector('.hero-overlay');

let bgImages = [];
const totalImages = 50;

for (let i = 1; i <= totalImages; i++) {
  bgImages.push(`images/hero-bg/hero-bg${i}.jpg`);
}

let usedIndexes = [];

function getRandomIndex() {
  if (usedIndexes.length === bgImages.length) usedIndexes = [];
  let idx;
  do {
    idx = Math.floor(Math.random() * bgImages.length);
  } while (usedIndexes.includes(idx));
  usedIndexes.push(idx);
  return idx;
}

function changeHeroBackground() {
  const index = getRandomIndex();
  hero.style.backgroundImage = `url('${bgImages[index]}')`;
}

setInterval(changeHeroBackground, 3000);

// =============================
// HERO BOARD & WELCOME ANIMATION
// =============================

window.addEventListener('load', () => {
  const board = document.querySelector('.hero-board');
  const welcome = document.querySelector('.hero-welcome');

  // Trigger board & welcome animation by adding the class via CSS animation (already applied)
  // No extra JS needed as animation handled via CSS
});

// =============================
// EXPLORE BUTTON FLOAT
// =============================

const exploreBtn = document.querySelector('.explore-btn');
exploreBtn.style.animation = "float 2s infinite ease-in-out";

// =============================
// SERVICES CARD ACTIVE EFFECT
// =============================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    serviceCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// =============================
// ABOUT TYPEWRITER EFFECT
// =============================

const aboutText = document.getElementById('about-text');
const fullAbout = aboutText.textContent;
aboutText.textContent = '';

let aboutIndex = 0;

function typeWriter() {
  if (aboutIndex < fullAbout.length) {
    aboutText.textContent += fullAbout.charAt(aboutIndex);
    aboutIndex++;
    setTimeout(typeWriter, 30);
  }
}

window.addEventListener('load', typeWriter);

// =============================
// TESTIMONIALS ANIMATION
// =============================

window.addEventListener('load', () => {
  const testimonials = document.querySelectorAll('.testimonial-card');
  testimonials.forEach((card, index) => {
    setTimeout(() => {
      card.style.animationDelay = `${index * 0.3}s`;
      card.classList.add(index % 2 === 0 ? 'left' : 'right');
    }, index * 200);
  });
});
