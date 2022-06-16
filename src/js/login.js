const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

// =================

const username = document.getElementById("uname");
const password = document.getElementById("psw");
const loginBtn = document.getElementById("loginBtn");

const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
console.log(allUsers);

username.addEventListener("keyup", () => {
    loginBtn.disabled = !username.value;
    console.log(username.value);
});

Login = (e) => {
    const user = {
        usern: username.value,
        pssw: password.value,
    };
    allUsers.push(user);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
};

// const username = document.getElementById("username");
// const saveScoreBtn = document.getElementById("saveScoreBtn");
// const finalScore = document.getElementById("finalScore");
// const mostRecentScore = localStorage.getItem("mostRecentScore");

// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// const MAX_HIGH_SCORES = 3;

// finalScore.innerText = mostRecentScore;

// username.addEventListener("keyup", () => {
//     saveScoreBtn.disabled = !username.value;
// });

// saveHighScore = (e) => {
//     e.preventDefault();

//     const score = {
//         score: mostRecentScore,
//         name: username.value,
//     };
//     // alert("Saved & Confirmed");
//     highScores.push(score);
//     highScores.sort((a, b) => b.score - a.score);
//     highScores.splice(3);

//     localStorage.setItem("highScores", JSON.stringify(highScores));
//     // window.location.assign("/");
// };

// document.getElementById("add").addEventListener("click", function() {
//     window,
//     this.localStorage.setItem("name", "Samuel Jaja");
// });

// UserAuth = () => {
//     currentUser.push(user);

//     localStorage.setItem("currentUser", JSON.stringify(currentUser));

// user = localStorage.getItem("username", username);
// pass = localStorage.getItem("username", password);
// em = localStorage.getItem("username", email);

// let a, b, c;

// a = "Jaja";
// b = 123456;
// c = "samuel.jaja21@gmail.com";

// if (a == user && b == pass && c == em) {
//     alert("Login Successful");
// } else {
//     alert("Invalid details !");
// }

// let user = {
//     username: username,
//     email: email,
//     password: password,
// };

// let json = JSON.stringify(user);
// localStorage.setItem(user, json);
// console.log("User Added");