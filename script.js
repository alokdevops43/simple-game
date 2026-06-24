const box = document.getElementById("box");
const scoreText = document.getElementById("score");
const gameArea = document.getElementById("game-area");
const restartBtn = document.getElementById("restart");

let score = 0;

function moveBox() {

    const maxX = gameArea.clientWidth - box.clientWidth;

    const maxY = gameArea.clientHeight - box.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);

    const randomY = Math.floor(Math.random() * maxY);

    box.style.left = randomX + "px";

    box.style.top = randomY + "px";
}

box.addEventListener("click", () => {

    score++;

    scoreText.textContent = score;

    moveBox();
});

restartBtn.addEventListener("click", () => {

    score = 0;

    scoreText.textContent = score;

    moveBox();
});

moveBox();