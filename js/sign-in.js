import { alertText } from "./alertText.js";

const signInEmail = document.querySelector(".signin__email"),
    signInPassword = document.querySelector(".signin__password"),
    signInBtn = document.querySelector(".signin__btn");

const signInArray = [];

function signInInfo() {
    if (localStorage.getItem("user")) {
        const userLocal = JSON.parse(localStorage.getItem("user"));

        userLocal.forEach((item) => {
            if (item.email === signInEmail.value && item.password === signInPassword.value) {
                item.login = true;

                signInArray.push(item);

                localStorage.setItem("user", JSON.stringify(signInArray));

                window.location.href = "../index.html";
            } else {
                alertText("Введите коректные данные", "../html/signin.html");
            }
        });
    }
}

signInBtn.addEventListener("click", signInInfo);
