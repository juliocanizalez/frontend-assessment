const scrollReveal = ScrollReveal();

const revealSettings = {
  delay: 400,
  interval: 200,
  distance: '80px',
  origin: 'bottom',
};

scrollReveal.reveal('.information__item', revealSettings);
scrollReveal.reveal('.products__grid__item', revealSettings);
scrollReveal.reveal('.podcast', revealSettings);
