// ==============================================Gradient overlay menu============================================
const overlay = document.querySelector('.gradient-overlay');
const hamburgerBtn = document.querySelector('#hamburger-btn');
const navItems = Array.from(document.getElementsByClassName("navigation-item"));

function toggleOverlay() {
  overlay.classList.toggle('active');
  hamburgerBtn.classList.toggle('active');
}
function activateOverlay() {
  overlay.classList.add('active');
  hamburgerBtn.classList.add('active');
}
function deactivateOverlay() {
  overlay.classList.remove('active');
  hamburgerBtn.classList.remove('active');
}

hamburgerBtn.addEventListener('click', toggleOverlay);
navItems.forEach(navItem => {
  navItem.addEventListener('click', toggleOverlay);
});
document.addEventListener('DOMContentLoaded', () => {
  if (scrollY < window.innerHeight/2) {
    activateOverlay();
  }
});
document.addEventListener('scroll', () => {
  if (scrollY < window.innerHeight/2) {
    activateOverlay();
  } else {
    deactivateOverlay();
  }

});



// ===============================================Typewriter effect=================================================
const text = "Meticulous Software Engineer with 2.5 years of experience designing, testing and developing web applications and databases. In-depth understanding of web technologies with focus on delivering innovative business solutions. Works great with team members under Agile and Scrum frameworks.";
let index = 0;
let isTyping = false;
let isCursorVisible = true;

function typeWriter(target) {
  if (index < text.length) {
    const currentText = text.slice(0, index + 1);
    target.textContent = currentText;
    if (isCursorVisible) {
      target.textContent += "|"; // Add cursor
    }
    isCursorVisible = !isCursorVisible;
    index++;
    setTimeout(() => typeWriter(target), 10); // Pass target element as an argument
  }
}

// Intersection Observer options
const typewriterOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Adjust threshold value as needed
};

// Callback function for the Intersection Observer
function handleTypewriterIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!isTyping) {
        // Start typewriter effect if not already running
        isTyping = true;
        typeWriter(entry.target);
      }
    } else {
      // Reset typewriter when element is hidden
      isTyping = false;
      entry.target.textContent = "";
      index = 0;
    }
  });
}

// Create an Intersection Observer instance
const typewriterObserver = new IntersectionObserver(handleTypewriterIntersection, typewriterOptions);

// Observe the target element
const target = document.getElementById("typewriter");
typewriterObserver.observe(target);


//====================================== h2 slide in/out effect===================================================
// Intersection Observer options
const sectionHeaderOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1 // Adjust threshold value as needed
};

// Callback function for the Intersection Observer
function handleSectionHeaderIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}

// Create an Intersection Observer instance
const sectionHeaderObserver = new IntersectionObserver(handleSectionHeaderIntersection, sectionHeaderOptions);

// Observe the h2 elements within the main tag
document.querySelectorAll('main h2').forEach((h2) => {
  sectionHeaderObserver.observe(h2);
});


//=========================================badge card effect========================================================
document.querySelectorAll('.badge-card').forEach(badgeCard => {
  sectionHeaderObserver.observe(badgeCard);
});