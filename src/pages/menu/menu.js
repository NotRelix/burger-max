import './menu.css';
import wafflesAndChickenImg from '../../assets/waffles-and-chicken.webp'
import icedSaltedCaramelImg from '../../assets/iced-salted-caramel-affogato.webp';
import kingFeast from '../../assets/king-feast.webp';
import whopperJr from '../../assets/whopper-jr.webp';

function createElemWithClass(elemName, className) {
  const newElem = document.createElement(elemName);
  newElem.classList.add(className);
  return newElem;
}

function getHeaderTitle(title) {
  let newTitle;
  if (title === 'featured') {
    newTitle = 'Featured';
  } else if (title === 'bestSellers') {
    newTitle = 'Best Sellers';
  } else if (title === 'bundles') {
    newTitle = 'Bundles';
  }
  return newTitle;
}

function menu() {
  const content = document.querySelector('#content');

  const container = createElemWithClass('div', 'container');
  content.appendChild(container);

  const menu = {
    featured: [
      {
        imgSrc: wafflesAndChickenImg,
        title: '2pc. Waffles & Chicken Solo',
      },
      {
        imgSrc: icedSaltedCaramelImg,
        title: 'Iced Salted Caramel Affogato',
      },
      {
        imgSrc: kingFeast,
        title: 'King Feast: Mix\'n Feast',
      },
      {
        imgSrc: whopperJr,
        title: 'Whopper Jr.',
      },
    ],
    bestSellers: [
      {
        imgSrc: icedSaltedCaramelImg,
        title: 'Iced Salted Caramel Affogato',
      },
      {
        imgSrc: wafflesAndChickenImg,
        title: '2pc. Waffles & Chicken Solo',
      },
      {
        imgSrc: whopperJr,
        title: 'Whopper Jr.',
      },
      {
        imgSrc: kingFeast,
        title: 'King Feast: Mix\'n Feast',
      },
      {
        imgSrc: whopperJr,
        title: 'Whopper Jr.',
      },
    ],
    bundles: [
      {
        imgSrc: wafflesAndChickenImg,
        title: '2pc. Waffles & Chicken Solo',
      },
      {
        imgSrc: icedSaltedCaramelImg,
        title: 'Iced Salted Caramel Affogato',
      },
    ],
  };

  for (let section in menu) {
    const container = createElemWithClass('div', 'container');
    content.appendChild(container);

    const list = createElemWithClass('div', 'list');
    container.appendChild(list);

    const header = createElemWithClass('h1', 'header');
    header.textContent = getHeaderTitle(section);
    list.appendChild(header);

    const cards = createElemWithClass('div', 'cards');
    list.appendChild(cards);

    for (let item of menu[section]) {
      const card = createElemWithClass('div', 'card');
      cards.appendChild(card);

      const image = document.createElement('img');
      image.src = item.imgSrc;
      card.appendChild(image);

      const cardTitle = document.createElement('h3');
      cardTitle.textContent = item.title;
      card.appendChild(cardTitle);

      const btn = document.createElement('button');
      btn.textContent = 'Order Now';
      card.appendChild(btn);
    }
  }
}

export default menu;