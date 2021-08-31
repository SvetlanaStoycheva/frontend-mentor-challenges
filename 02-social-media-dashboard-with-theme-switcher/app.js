const toggleBtn = document.querySelector('.slider');
const toggleText = document.querySelector('.toggle-text');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', () => {
  console.log(toggleText.textContent);

  if (toggleText.textContent == 'dark mode') {
    toggleText.textContent = 'light mode';
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    toggleText.textContent = 'dark mode';
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
});
