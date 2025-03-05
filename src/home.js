import './style.css';
import burgerMaxImage from '../public/burger-max.png';

function createElemWithClass(elemName, className) {
  const newElem = document.createElement(elemName);
  newElem.classList.add(className);
  return newElem;
}

function home() {
  // Top section
  const body = document.querySelector('body');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const navLinks = ['Home', 'Menu', 'About'];

  const logoName = document.createElement('h1');
  logoName.textContent = 'Burger Max';

  navLinks.map(link => {
    const newLink = createElemWithClass('button', `${link.toLowerCase()}-btn`);
    newLink.textContent = link;
    nav.appendChild(newLink);
  })

  header.appendChild(logoName);
  header.appendChild(nav);
  body.appendChild(header);

  // Top Section - Hero Area
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  body.appendChild(content);

  const topContent = createElemWithClass('div', 'top-content');
  content.appendChild(topContent);

  const heroContent = createElemWithClass('div', 'hero-content');
  topContent.appendChild(heroContent);

  const heroTitle = document.createElement('h1');
  heroTitle.textContent = 'Welcome to Burger Max!';
  heroContent.appendChild(heroTitle);

  const heroDesc = document.createElement('p')
  heroDesc.textContent = 'Enjoy delicious, handcrafted burgers made with fresh ingredients. Order now for delivery or explore our mouthwatering menu!';
  heroContent.appendChild(heroDesc);

  const btnContainer = createElemWithClass('div', 'btn-container');
  heroContent.appendChild(btnContainer);

  const ctaBtn = createElemWithClass('button', 'cta');
  ctaBtn.textContent = 'Shop Now!';
  btnContainer.appendChild(ctaBtn);

  const heroBanner = createElemWithClass('img', 'hero-banner');
  heroBanner.src = burgerMaxImage;
  topContent.appendChild(heroBanner);

  const horizontalLine = document.createElement('hr');
  content.appendChild(horizontalLine);

  // Middle Section - Open Hours
  const bodyContent = createElemWithClass('div', 'body-content');
  content.appendChild(bodyContent);

  const bodyHeader = document.createElement('h1');
  bodyHeader.textContent = 'OPEN HOURS';
  bodyContent.appendChild(bodyHeader);

  const scheduleData = [
    {
      day: 'Monday',
      time: '8AM - 6PM',
    },
    {
      day: 'Tuesday',
      time: '8AM - 6PM',
    },
    {
      day: 'Wednesday',
      time: '8AM - 6PM',
    },
    {
      day: 'Thursday',
      time: '8AM - 6PM',
    },
    {
      day: 'Friday',
      time: '8AM - 6PM',
    },
    {
      day: 'Saturday',
      time: '8AM - 4PM',
    },
    {
      day: 'Sunday',
      time: 'Closed',
    },
  ];

  const table = document.createElement('table');
  bodyContent.appendChild(table);
  scheduleData.map(data => {
    const row = document.createElement('tr');
    table.appendChild(row);

    const tHead = document.createElement('th');
    tHead.textContent = data.day;
    row.appendChild(tHead);

    const tData = document.createElement('td');
    tData.textContent = data.time;
    row.appendChild(tData);
  })
}

export default home;