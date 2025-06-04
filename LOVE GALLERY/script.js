const audio = document.getElementById('audio');
let cards = document.querySelectorAll('.card');
let currentIndex = 0;
let interval;

function showCard(index) {
  cards.forEach(card => card.classList.remove('show'));
  cards[index].classList.add('show');
}

function rotateCards() {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(rotateCards, 5000);
}

document.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    rotateCards();
    resetInterval();
  });
});

showCard(currentIndex);
interval = setInterval(rotateCards, 5000);

const enterBtn = document.getElementById('enter-btn');
const entryScreen = document.getElementById('entry-screen');

enterBtn.addEventListener('click', () => {
  entryScreen.style.display = 'none';
  audio.play().catch(() => {
    console.log("Autoplay blocked. User must interact with the audio.");
  });
});
