// ============== HERO BACKGROUND RANDOM SLIDESHOW ==============

const hero = document.querySelector('.hero');
const heroOverlay = document.querySelector('.hero-overlay');
const exploreBtn = document.querySelector('.explore-btn');

let bgImages = [];
const totalImages = 50; // Change this to your total images count

for (let i = 1; i <= totalImages; i++) {
  bgImages.push(`images/hero-bg/hero-bg${i}.jpg`);
}

let usedIndexes = [];

function getRandomIndex() {
  if (usedIndexes.length === bgImages.length) {
    usedIndexes = [];
  }

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

// ============== EXPLORE BUTTON FLOATING ANIMATION ==============

exploreBtn.style.animation = "float 2s infinite ease-in-out";

// ============== SERVICES CARD INTERACTION ==============

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove active from all
    serviceCards.forEach(c => {
      c.classList.remove('active');
    });
    // Add active to clicked
    card.classList.add('active');
  });
});

// ============== ABOUT SECTION TYPEWRITER ==============

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

// ============== TESTIMONIALS ANIMATION ==============

window.addEventListener('load', () => {
  const testimonials = document.querySelectorAll('.testimonial-card');
  testimonials.forEach((card, index) => {
    setTimeout(() => {
      card.style.animationDelay = `${index * 0.3}s`;
      card.classList.add(index % 2 === 0 ? 'left' : 'right');
    }, index * 200);
  });
});

// ============== Welcome Animation ==============

window.addEventListener('load', () => {
  const welcomeText = document.querySelector('.welcome-text-img');

  // Welcome text ka animation start
  welcomeText.style.animation = 'welcomeDrop 2s forwards';

  // Board ka animation CSS se already chalu hoga
});
