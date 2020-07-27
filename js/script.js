const arrow = document.querySelector('.arrow-btn');

// flip collapse arrow

arrow.addEventListener('click', (e) => {
  e.preventDefault();
  arrow.classList.toggle('arrow-up');
})