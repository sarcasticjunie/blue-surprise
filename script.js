
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(number) {
  slides.forEach(function(slide, index) {
    slide.style.display = index === number ? "block" : "none";
  });
  currentSlide = number;
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    showSlide(currentSlide + 1);
  }
}

// Normal buttons
document.getElementById("yesBtn").onclick = nextSlide;
document.getElementById("knowBtn2").onclick = nextSlide;
document.getElementById("knowBtn3").onclick = nextSlide;
document.getElementById("noBtn4").onclick = nextSlide;
document.getElementById("yesBtn5").onclick = nextSlide;

// Slide 1: NO button escapes!
const noButton = document.getElementById("noBtn");

function moveNoButton() {
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 80 - 40;

  noButton.style.transform = `translate(${x}px, ${y}px)`;
}

noButton.addEventListener("pointerenter", moveNoButton);
noButton.addEventListener("touchstart", moveNoButton);
noButton.addEventListener("click", moveNoButton);

function makeDodge(buttonId) {
  const button = document.getElementById(buttonId);

  function dodge() {
    const x = Math.random() * 140 - 70;
    const y = Math.random() * 100 - 50;

    button.style.transform = `translate(${x}px, ${y}px)`;
  }

  button.addEventListener("pointerenter", dodge);
  button.addEventListener("touchstart", dodge);
}

// Slide 2
makeDodge("dontKnowBtn2");

// Slide 3
makeDodge("dontKnowBtn3");

// Slide 4
makeDodge("yesBtn4");

// Slide 5
makeDodge("noBtn5");

// Slide 6: Special reactions

const yes6 = document.getElementById("yesBtn6");
const no6 = document.getElementById("noBtn6");
const character = document.getElementById("character");

let attempts = 0;

const expressions = [
  "😌", "🙂", "😐", "😶", "☹️",
  "😞", "😔", "🤧", "🙀", "🤯", "💔"
];

function updateSlide6() {
  attempts = Math.min(attempts + 1, expressions.length - 1);

  character.textContent = expressions[attempts];

  // YES gradually grows
  yes6.style.transform = `scale(${1 + attempts * 0.12})`;

  // NO gradually shrinks, but stays tappable
  no6.style.transform = `scale(${Math.max(0.8, 1 - attempts * 0.025)})`;
}

// Each interaction updates the animation
no6.addEventListener("click", updateSlide6);

// YES remains a real choice
yes6.onclick = function() {
  showSlide(6);
};

// NO remains a real choice too
no6.addEventListener("click", updateSlide6);

// Start
showSlide(0);
