import './about.css';
import burgerMaxMapImg from '../../assets/burger-max-maps.png';
import firstShopImg from '../../assets/burger-max-first-shop.png';

function createElemWithClass(elemName, className) {
  const newElem = document.createElement(elemName);
  newElem.classList.add(className);
  return newElem;
}

function about() {
  const content = document.querySelector('#content');

  const aboutContainer = createElemWithClass('div', 'about-container');
  content.appendChild(aboutContainer);

  const aboutUsHeader = document.createElement('h1');
  aboutUsHeader.textContent = 'About Us';
  aboutContainer.appendChild(aboutUsHeader);

  const aboutUsDesc = document.createElement('p');
  aboutUsDesc.textContent = 'At Burger Max, we believe in delivering the ultimate burger experience—where bold flavors meet fresh ingredients and quality is never compromised.';
  aboutContainer.appendChild(aboutUsDesc);

  const mapImg = document.createElement('img');
  mapImg.src = burgerMaxMapImg;
  aboutContainer.appendChild(mapImg);

  const welcomeHeader = document.createElement('h2');
  welcomeHeader.textContent = 'Welcome to Burger Max, where every bite is maxed out on taste!'
  aboutContainer.appendChild(welcomeHeader);

  const welcomeDesc = document.createElement('p');
  welcomeDesc.textContent = "Our journey started with a simple goal: to craft mouthwatering burgers that satisfy every craving. From our signature Max Stack to our crispy Waffles & Chicken, each item on our menu is made with passion and precision. Whether you're dining in, grabbing takeout, or ordering for a feast, we promise a meal that’s juicy, flavorful, and unforgettable.";
  aboutContainer.appendChild(welcomeDesc);

  const firstShop = document.createElement('img');
  firstShop.src = firstShopImg;
  aboutContainer.appendChild(firstShop);

  const historyHeader = document.createElement('h2');
  historyHeader.textContent = 'Burger Max History';
  aboutContainer.appendChild(historyHeader);

  const historyDesc = document.createElement('p');
  historyDesc.textContent = "What started as a small burger joint quickly gained a loyal following, and today, Burger Max has expanded into several countries, bringing its signature flavors to burger lovers worldwide. With locations across North America, Europe, Asia, and beyond, we continue to serve up delicious, high-quality meals while staying true to our roots. Whether you’re grabbing a quick bite on the go or sitting down for a feast, our goal remains the same: to deliver bold flavors, unbeatable quality, and an unforgettable burger experience—every time.";
  aboutContainer.appendChild(historyDesc);
}

export default about;