const maxwidthUser = document.getElementById("max-width");

const currentplayer = JSON.parse(localStorage.getItem("allUsers"));

console.log(currentplayer[0].usern);

maxwidthUser.innerText = currentplayer[0].usern;
const welcometext = maxwidthUser.innerText;

maxwidthUser.innerText = `Hi ${welcometext}, it's a Quick Quiz `;