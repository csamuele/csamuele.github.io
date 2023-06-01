// ==============================================Gradient overlay menu============================================
/*this slides the navigation menu into view when the viewport is at the top of the page or when the hamburger
button is clicked, and it slides the navigation menu back out when the user scrolls or the hamburger menu is clicked*/

const overlay = document.querySelector('.gradient-overlay');
const hamburgerBtn = document.querySelector('#hamburger-btn');
const navItems = Array.from(document.getElementsByClassName("navigation-item"));
const halfWindowHeight = window.innerHeight / 2;

function toggleOverlay() {
  overlay.classList.toggle('active');
  hamburgerBtn.classList.toggle('active');
}

function handleScroll() {
  const shouldActivate = scrollY < halfWindowHeight;
  overlay.classList.toggle('active', shouldActivate);
  hamburgerBtn.classList.toggle('active', shouldActivate);
}

hamburgerBtn.addEventListener('click', toggleOverlay);
navItems.forEach(navItem => {
  navItem.addEventListener('click', toggleOverlay);
});

document.addEventListener('DOMContentLoaded', () => {
  handleScroll();
});

document.addEventListener('scroll', handleScroll);


//======================================Default intersection observer===================================================
//This section applies the active class to a specified element when it intersects with the viewport

// Intersection Observer options
const Options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Adjust threshold value as needed
};

// Callback function for the Intersection Observer
function handleDefaultIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}

// Create an Intersection Observer instance
const defaultObserver = new IntersectionObserver(handleDefaultIntersection, Options);

//apply default intersection observer to all h2 elements within the main tag
document.querySelectorAll('main h2').forEach((h2) => {
  defaultObserver.observe(h2);
});


//apply default intersection observer to all badge cards
document.querySelectorAll('.badge-card').forEach(badgeCard => {
  defaultObserver.observe(badgeCard);
});

//apply default intersection observer to all project cards
document.querySelectorAll('.project-card').forEach(projectCard => {
  defaultObserver.observe(projectCard);
});

// ===============================================Typewriter effect=================================================
//This inserts the string in the text variable to the specified element one letter at a time while appending a '|' at the end to simulate a typwriter effect
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
const typewriterObserver = new IntersectionObserver(handleTypewriterIntersection, Options);

// Observe the target element
const target = document.getElementById("typewriter");
typewriterObserver.observe(target);

//==========================================Project hover effect================================================
//This makes the description appear when you hover over a link in the projects section

function showDescription(card) {
  card.classList.add('description-visible');
}

function hideDescription(card) {
  card.classList.remove('description-visible');
}