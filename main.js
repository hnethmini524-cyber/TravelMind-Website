const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const facts = [
  "France is the most visited country in the world, attracting over 80 million tourists annually.",
  "Canada has the longest coastline in the world, stretching over 202,000 km.",
  "Nepal is home to the highest point on Earth – Mount Everest at 8,848 meters.",
  "The Maldives is the lowest country in the world, with an average ground level of just 1.5 meters above sea level.",
  "There’s a town in Norway called Hell — it even freezes over in winter!",
  "Singapore has a hotel made entirely of recycled shipping containers.",
  "Alaska has a town where it’s illegal to wake a sleeping bear!",
  "There’s a bridge in India that’s 2,500 years old and still in use today.",
  "In Bhutan, tourism is limited to protect culture and environment; travelers pay a daily fee.",
  "Antarctica is the only continent with no permanent residents, only temporary researchers."
];

const factText = document.getElementById("fact-text");
const newFactBtn = document.getElementById("new-fact-btn");

newFactBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
});


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});