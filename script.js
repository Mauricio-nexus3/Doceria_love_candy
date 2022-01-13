

let btnMobile = document.querySelector('.header .menu-mobile')

function toggleMenu() {
let navbar = document.querySelector('.header .navbar')
  navbar.classList.toggle('active');

}


btnMobile.addEventListener('click', toggleMenu);