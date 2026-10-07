const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', function() {
  const isMenuOpen = menu.classList.toggle('active');
  document.body.classList.toggle('menu-open', isMenuOpen);
});
closeButton.addEventListener('click', function() {
    menu.classList.remove('active');
    
    document.body.classList.remove('menu-open');
});