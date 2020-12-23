const reindeerSelector = document.querySelector('.reindeer-selector');

const grid = document.querySelector('.grid');
const cardList = document.querySelector('.card__info-list')



const generateCards = () => {
  grid.innerHTML="";
  reindeer.forEach((deer, i) => {
    grid.innerHTML += `
    <section class="grid__profiles-card card${i}">
      <article class="grid__profiles-card-front">
        <img class="card__image" src="./assets/${deer.name}.jpg" alt="${deer.name}">
        <section class="card__years">
          <p class="card__years-title">years active</p>
          <p class="card__years-count">${deer.activeYears}</p>
        </section>
        <section class="card__info">
          <h2 class="card__info-name">${deer.name}</h2>
          <ul class="card__info-list">
            <li>${deer.personality[0]}</li>
            <li>${deer.personality[1]}</li>
            <li>${deer.personality[2]}</li>
            <li>${deer.personality[3]}</li>
          </ul>
        </section>
      </article>
      <article class="grid__profiles-card-back">
        <p class="card__bio">${deer.bio}</p>
      </article>
    </section>
    `
  })
}

generateCards();

const cards = document.querySelectorAll(".grid__profiles-card");

function flipCard() {
  this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));