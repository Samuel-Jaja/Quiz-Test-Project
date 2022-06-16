const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

let username = document.getElementById("username");
let password = document.getElementById("password");

document.getElementById("add").addEventListener("click", function() {
    window,
    this.localStorage.setItem("name", "Samuel Jaja");
});

// UserAuth() {

//     }
// localStorage.setItem("user", JSON.stringify([]));
// localStorage.setItem("usernam", username);
// localStorage.setItem("passwor", password);

let un = username;
console.log(un);

const person = {
    name: username,
    location: password,
};

window.localStorage.setItem("user", JSON.stringify(person));
// let user = localStorage.setItem("username", username);
// let pass = localStorage.setItem("password", password);

UserAuth = () => {
    // const user = {
    //     username: username.value,
    //     password: password.value,
    // };

    currentUser.push(user);

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

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
};