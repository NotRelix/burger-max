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

  // Bottom Section: Contact Us
  const bottomContent = createElemWithClass('div', 'bottom-content');
  content.appendChild(bottomContent);

  const bottomHeader = document.createElement('h1');
  bottomHeader.textContent = 'GET IN TOUCH';
  bottomContent.appendChild(bottomHeader);

  const contactContainer = createElemWithClass('div', 'contact-container');
  bottomContent.appendChild(contactContainer);

  const contactContent = createElemWithClass('div', 'contact-content');
  contactContainer.appendChild(contactContent);

  const contactHeader = document.createElement('h1');
  contactHeader.textContent = 'Contact Us';
  contactContent.appendChild(contactHeader);

  const contactDesc = document.createElement('p');
  contactDesc.textContent = 'Have questions or need assistance? Get in touch with us! Whether it’s about our menu, your order, or just to say hi, we’re here to help.';
  contactContent.appendChild(contactDesc);

  const formContainer = createElemWithClass('div', 'form-container');
  contactContainer.appendChild(formContainer);

  const form = document.createElement('form');
  form.action = '#';
  formContainer.appendChild(form);

  const formDetails = [
    {
      label: 'First Name',
      id: 'first-name',
      inputType: 'text',
    },
    {
      label: 'Last Name',
      id: 'last-name',
      inputType: 'text',
    },
    {
      label: 'Email',
      id: 'email',
      inputType: 'email',
    },
  ];

  formDetails.map(item => {
    const label = document.createElement('label');
    label.htmlFor = item.id;
    label.textContent = item.label;
    form.append(label);

    const input = document.createElement('input');
    input.type = item.inputType;
    input.id = item.id;
    form.appendChild(input);
  });

  const labelMessage = document.createElement('label');
  labelMessage.htmlFor = 'message';
  labelMessage.textContent = 'Message';
  form.appendChild(labelMessage);
  
  const textArea = document.createElement('textarea');
  textArea.name = 'message';
  textArea.id = 'message';
  textArea.setAttribute('rows', 6);
  form.appendChild(textArea);

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Submit';
  form.appendChild(submitBtn);
}

export default home;