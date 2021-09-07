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
