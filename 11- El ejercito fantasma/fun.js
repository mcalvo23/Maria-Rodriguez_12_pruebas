//capturar elementos
const grid = document.getElementById('grid');
const gridItems = document.querySelectorAll('.grid-item');
const winOverlay = document.getElementById('winOverlay');
const gameOverOverlay = document.getElementById('gameOverOverlay');
const fantasma = document.createElement('img');
fantasma.src = 'fantasma.jpg';
fantasma.alt = 'Fantasma';

let gameRunning = true;

function randomPosition() {
    if (gameRunning) {
        const randomIndex = Math.floor(Math.random() * gridItems.length);
        const gridItem = gridItems[randomIndex];

        gridItems.forEach(item => {
            item.innerHTML = '';
        });

        gridItem.appendChild(fantasma);
        fantasma.style.display = 'block';

        
        setTimeout(randomPosition, 2000); // los fantasmas aparecen cada 2 segundos
    }
}

randomPosition();

//si gana
fantasma.addEventListener('click', () => {
    if (gameRunning) {
        gameRunning = false;
        winOverlay.style.display = 'flex';
    }
});

//gameover
setTimeout(() => {
    if (gameRunning) {
        gameRunning = false;
        gameOverOverlay.style.display = 'flex';
    }
}, 5000);