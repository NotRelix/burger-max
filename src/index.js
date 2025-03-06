import home from './pages/home/home.js';
import menu from './pages/menu/menu.js';
import about from './pages/about/about.js';

const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const aboutBtn = document.querySelector('.about-btn');
const content = document.querySelector('#content');

homeBtn.addEventListener('click', () => {
  content.innerHTML = '';
  home();
});

menuBtn.addEventListener('click', () => {
  content.innerHTML = '';
  menu();
});

aboutBtn.addEventListener('click', () => {
  content.innerHTML = '';
  about();
});

content.addEventListener('click', (e) => {
  if (e.target.classList.contains('cta')) {
    content.innerHTML = '';
    menu();
  }
})

home();