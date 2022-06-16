const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

function UserAuth() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = localStorage.setItem("username", username);
    let pass = localStorage.setItem("password", password);
    let em = localStorage.setItem("email", email);

    user = localStorage.getItem("username", username);
    pass = localStorage.getItem("username", password);
    em = localStorage.getItem("username", email);

    // let a, b, c;

    // a = "Jaja";
    // b = 123456;
    // c = "samuel.jaja21@gmail.com";

    // if (a == user && b == pass && c == em) {
    //     alert("Login Successful");
    // } else {
    //     alert("Invalid details !");
    // }
}

// let user = {
//     username: username,
//     email: email,
//     password: password,
// };

// let json = JSON.stringify(user);
// localStorage.setItem(user, json);
// console.log("User Added");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});