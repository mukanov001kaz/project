import { alertText } from "./alertText.js";

const bascet = function () {
    const product = document.querySelector(".product"),
        bascetBtn = document.querySelector(".header__cart");

    let user = JSON.parse(localStorage.getItem("user"));

    const goOut = document.querySelector(".go__out");

    product.addEventListener("click", (e) => {
        if (e.target.classList.contains("product__add-basket")) {
            if (!user) {
                alertText("Для добавления товара в корзину войдите или зарегистрируйте акаунт", "./html/signup.html");
            }

            if (user) {
                let userBascetArray = [];

                user.forEach((item) => {
                    if (!item.login) {
                        alertText("Войдите в свой акаунт", "./html/signin.html");
                    } else {
                        const productItem = e.target.closest(".product__item");

                        const basketImg = productItem.querySelector(".product__image"),
                            bascetTitle = productItem.querySelector(".product__title"),
                            bascetPrice = productItem.querySelector(".product__price"),
                            bascetId = productItem.getAttribute("id");

                        const bascetObj = {
                            img: basketImg.src,
                            title: bascetTitle.textContent,
                            price: bascetPrice.textContent,
                            id: bascetId,
                            quantity: 1,
                        };

                        const some = item.array.some((item) => item.id === bascetObj.id);

                        if (!some) {
                            item.array.push(bascetObj);
                        } else {
                            alertText("Такой товар есть в корзине", "./index.html");
                        }

                        userBascetArray.push(item);
                        localStorage.setItem("user", JSON.stringify(userBascetArray));
                    }
                });
            }
        }
        bascetCountShow();
    });

    function bascetCountShow() {
        let bascetCount = document.querySelector(".bascet__item");
        const bascetCountLength = JSON.parse(localStorage.getItem("user")) || [];

        bascetCountLength.forEach((item) => {
            bascetCount.textContent = item.array.length;
        });
    }
    bascetCountShow();

    bascetBtn.addEventListener("click", () => {
        window.location.href = "../html/bascet.html";
    });

    goOut.addEventListener("click", () => {
        if (localStorage.getItem("user")) {
            const goOutArray = [];

            const userLocalstorage = JSON.parse(localStorage.getItem("user"));

            userLocalstorage.forEach((item) => {
                item.login = false;

                goOutArray.push(item);

                localStorage.setItem("user", JSON.stringify(goOutArray));
            });
            alertText("Вы вышли с аккаунта", "./index.html");
        }
    });
};

export { bascet };
