// Slider functionality
const sliderArray = [
  {
    title: 'Discover innovative ways to decorate',
    info:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    img: './images/desktop-image-hero-1.jpg',
  },
  {
    title: 'We are available all across the globe',
    info:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img: './images/desktop-image-hero-2.jpg',
  },
  {
    title: 'Manufactured with the best materials',
    info:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    img: './images/desktop-image-hero-3.jpg',
  },
];

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderEl = document.querySelector('.slider');
const sliderImg = document.querySelector('.slider-img');
const sliderTitle = document.querySelector('.slider-title');
const sliderText = document.querySelector('.slider-text');

let index = 0;
prevBtn.addEventListener('click', () => {
  if (index <= 0) {
    index = sliderArray.length - 1;
  } else {
    index -= 1;
  }
  showHero(index);
});

nextBtn.addEventListener('click', () => {
  if (index >= sliderArray.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  showHero(index);
});

function showHero(index) {
  sliderImg.src = sliderArray[index].img;
  sliderTitle.textContent = sliderArray[index].title;
  sliderText.textContent = sliderArray[index].info;
}

// Navigation / small screen
const closeBtn = document.querySelector('.close-btn');
const toggleBtn = document.querySelector('.toggle-btn');
const navSmall = document.querySelector('.toggle-menu');

toggleBtn.addEventListener('click', () => {
  navSmall.classList.add('show-toggle-menu');
});
closeBtn.addEventListener('click', () => {
  navSmall.classList.remove('show-toggle-menu');
});
