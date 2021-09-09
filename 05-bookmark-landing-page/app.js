// toggle sidebar
const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

const navbarSmallScreen = document.querySelector('.small-navbar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
  navbarSmallScreen.classList.add('hide-small-navbar');
});
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
  navbarSmallScreen.classList.remove('hide-small-navbar');
});

// Features functionality
const featuresBtns = [...document.querySelectorAll('.features-button')];
const container = document.querySelector('.featires-container');

const imageEl = document.querySelector('.features-photo');
const title = document.querySelector('.features-title');
const text = document.querySelector('.features-text');

const features = [
  {
    title: 'Bookmark in one click',
    text:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    image: './images/illustration-features-tab-1.svg',
  },
  {
    title: 'Intelligent search',
    text:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    image: './images/illustration-features-tab-2.svg',
  },
  {
    title: 'Share your bookmarks',
    text:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button. ',
    image: './images/illustration-features-tab-3.svg',
  },
];

featuresBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
      featuresBtns.map((b)=> {b.classList.remove('features-button-active')})
    btn.classList.add('features-button-active');
    
    if (e.target.classList.contains('first')) {
      text.textContent = features[0].text;
      title.textContent = features[0].title;
      imageEl.src = features[0].image;
    } else if (e.target.classList.contains('second')) {
      text.textContent = features[1].text;
      title.textContent = features[1].title;
      imageEl.src = features[1].image;
    } else if (e.target.classList.contains('third')) {
      text.textContent = features[2].text;
      title.textContent = features[2].title;
      imageEl.src = features[2].image;
    }
  });
});

// FAQ functionality
const answerBtns = document.querySelectorAll('.answer-btn');
// const answerEl = document.querySelector('.answer')

answerBtns.forEach((answerBtn)=>{
    answerBtn.addEventListener('click', (e)=>{
        const question = e.currentTarget.parentElement;
        const answer = question.nextElementSibling;
        answer.classList.toggle('show-answer')

        console.log(e.target);
        
        
    })
})