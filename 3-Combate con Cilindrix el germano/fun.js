// definir los jugadores
const asterix = {
    image: "url-a-asterix",
    weapons: {
        puño: "1",
        pierna: "2",
        bofetada: "3",
        sentadilla: "4",
        pocion: null,
    },
};

const cilindrix = {
    image: "url-a-cilindrix",
    weapons: {
        llave: "1",
        luxacion: "2",
        bofetada: "3",
        sentadilla: "4",
    },
};

// capturar elementos
const asterixPlayer = document.querySelector(".player--asterix");
const cilindrixPlayer = document.querySelector(".player--cilindrix");
const fightButton = document.querySelector(".fight-button__btn");

// función para reiniciar el juego
function resetGame() {
    document.querySelector(".player--asterix .player__points").textContent = "0";
    document.querySelector(".player--cilindrix .player__points").textContent = "0";

    // eliminar mensajes de ganador anterior
    document.querySelectorAll(".attack-overlay").forEach((overlay) => overlay.remove());

    fightButton.disabled = false;
}

// click en el botón de pelea
fightButton.addEventListener("click", () => {
    // verificar si hay un ganador
    const asterixPoints = parseInt(asterixPlayer.querySelector(".player__points").textContent);
    const cilindrixPoints = parseInt(cilindrixPlayer.querySelector(".player__points").textContent);

    if (asterixPoints >= 5 || cilindrixPoints >= 5) {
        // si hay un ganador, reiniciar el juego
        resetGame();
    } else {
        // si no hay ganador, continuar con el juego
        const asterixAttack = getRandomAttack(asterix.weapons);
        const cilindrixAttack = getRandomAttack(cilindrix.weapons);

        // comparar ataques y actualizar puntos
        const result = compareAttacks(asterixAttack, cilindrixAttack);
        updatePoints(result);

        showAttackOverlay(asterixPlayer, asterixAttack);
        showAttackOverlay(cilindrixPlayer, cilindrixAttack);

        checkWinner();
    }
});

// ataque random
function getRandomAttack(weapons) {
    const weaponKeys = Object.keys(weapons);
    const randomKey = weaponKeys[Math.floor(Math.random() * weaponKeys.length)];
    return { name: randomKey, value: weapons[randomKey] };
}

// comparar ataques y tener un resultado
function compareAttacks(attackA, attackB) {
    if (attackA.value > attackB.value) {
        return "asterix";
    } else if (attackA.value < attackB.value) {
        return "cilindrix";
    } else {
        return "empate";
    }
}

// actualizar los puntos 
function updatePoints(winner) {
    const asterixPointsElement = document.querySelector(".player--asterix .player__points");
    const cilindrixPointsElement = document.querySelector(".player--cilindrix .player__points");

    if (winner === "asterix") {
        asterixPointsElement.textContent = parseInt(asterixPointsElement.textContent) + 1;
    } else if (winner === "cilindrix") {
        cilindrixPointsElement.textContent = parseInt(cilindrixPointsElement.textContent) + 1;
    }
}

// resultado del ataque 
function showAttackOverlay(playerElement, attack) {
    const overlay = document.createElement("div");
    overlay.classList.add("attack-overlay");
    overlay.textContent = `${attack.name}: +${attack.value}`;
    playerElement.appendChild(overlay);

    setTimeout(() => {
        overlay.remove();
    }, 1000);
}

// verificar si hay un ganador
function checkWinner() {
    const asterixPoints = parseInt(asterixPlayer.querySelector(".player__points").textContent);
    const cilindrixPoints = parseInt(cilindrixPlayer.querySelector(".player__points").textContent);

    if (asterixPoints >= 5) {
        showWinner(asterixPlayer, "ASTERIX");
    } else if (cilindrixPoints >= 5) {
        showWinner(cilindrixPlayer, "CILINDRIX");
    }
}

// función para xganador
function showWinner(playerElement, winnerName) {
    const winnerOverlay = document.createElement("div");
    winnerOverlay.classList.add("attack-overlay");
    winnerOverlay.style.backgroundColor = "rgba(0, 255, 0, 0.7)";
    winnerOverlay.textContent = `WINNER: ${winnerName}`;
    playerElement.appendChild(winnerOverlay);
}
