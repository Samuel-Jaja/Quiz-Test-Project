const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 3;

finalScore.innerText = mostRecentScore + "%";

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    // alert("Saved & Confirmed");
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(3);

    localStorage.setItem("highScores", JSON.stringify(highScores));
};

const playerScore = document.getElementById("playerScore");
const currentplayer = JSON.parse(localStorage.getItem("allUsers"));
playerScore.innerText = currentplayer[0].usern;
const playerscorenotify = playerScore.innerText;
playerScore.innerText = `Hey ${playerscorenotify}, you scored `;