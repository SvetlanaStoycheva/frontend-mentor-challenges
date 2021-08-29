const people = [
  {
    id: 1,
    name: 'Tanya Sinclair',
    position: 'UX Engineer',
    info:
      '"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."',
    image: './images/image-tanya.jpg',
  },
  {
    id: 2,
    name: 'John Tarkpor',
    position: 'Junior Front-end Developer',
    info:
      '"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."',
    image: './images/image-john.jpg',
  },
];

const name = document.querySelector('.name');
const position = document.querySelector('.position');
const image = document.querySelector('.person-img');
const info = document.querySelector('.info-text');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = people[person];

  image.src = item.image;
  name.textContent = item.name;
  position.textContent = item.position;
  info.textContent = item.info;
}

prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = people.length - 1;
  }
  showPerson(currentItem);
});
nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > people.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
