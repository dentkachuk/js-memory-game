const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    console.log(this);
    this.classList.togle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));