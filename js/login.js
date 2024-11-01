export const login = function () {
    const login = document.querySelector(".header__login");

    login.addEventListener("click", () => {
        window.location.href = "./html/signup.html";
    });
};
