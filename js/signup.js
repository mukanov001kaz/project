import { alertText } from "./alertText.js";

const name = document.querySelector(".signup__name"),
    email = document.querySelector(".signup__email"),
    password = document.querySelector(".signup__password"),
    btn = document.querySelector(".signup__btn");

let sigUpArray = [];

function signUpInfo() {
    if (name.value === "" || email.value === "" || password.value === "") {
        alertText("Введите коректные данные", "../html/signup.html");
        return;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
        alertText("email должен содержать знак @ и .", "../html/signup.html");
        return;
    } else if (password.value.length < 8) {
        alertText("Пароль должен быть от 8 символов и выше", "../html/signup.html");
        return;
    } else {
        const signUpObj = {
            name: name.value,
            email: email.value,
            password: password.value,
            login: false,
            array: [],
        };

        sigUpArray.push(signUpObj);

        localStorage.setItem("user", JSON.stringify(sigUpArray));

        name.value = "";
        email.value = "";
        password.value = "";

        window.location.href = "signin.html";
    }
}

btn.addEventListener("click", signUpInfo);
