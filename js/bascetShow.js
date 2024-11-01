import { alertText } from "./alertText.js";

const bascetBlock = document.querySelector(".bascet-block");
const bascetPage = document.querySelector(".bascet__content-block");
const formater = new Intl.NumberFormat("ru");
const buyBtn = document.querySelector(".buy__button");
const backButton = document.querySelector(".buy__button-back");

let bascet;

const renderBasket = function (bascet) {
    bascet.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("bascet__item-block");
        div.setAttribute("data-id", `${item.id}`);

        div.innerHTML = `
            <img src="${item.img}" class="bascet__img" alt="" />
            <div class="bascet__content">
                <div class="bascet__title">${item.title}</div>
                <div class="bascet__quantity">
                    <button class="btn btn-primary minus">-</button>
                    <span class="result">${item.quantity}</span>
                    <button class="btn btn-primary plus">+</button>
                </div>
                <div class="bascet__price" data-price="${item.price}">${item.price}</div>
            </div>
            <span class="remove">x</span>
            `;
        bascetPage.prepend(div);

        // bascetPage.innerHTML += `
        //    <div class="bascet__item-block" data-id="${item.id}">
        //         <img src="${item.img}" class="bascet__img" alt="" />
        //         <div class="bascet__content">
        //             <div class="bascet__title">${item.title}</div>
        //             <div class="bascet__quantity">
        //                 <button class="btn btn-primary minus">-</button>
        //                 <span class="result">1</span>
        //                 <button class="btn btn-primary plus">+</button>
        //             </div>
        //             <div class="bascet__price" data-price="${item.price}">${item.price}</div>
        //         </div>
        //         <span class="remove">x</span>
        //     </div>
        // `;
    });
};

function localProduct() {
    backButton.style.display = "none";

    if (localStorage.getItem("user")) {
        const userLocal = JSON.parse(localStorage.getItem("user"));

        userLocal.forEach((item) => {
            if (item.array.length === 0) {
                bascetPage.textContent = "Корзина пуста";
                buyBtn.style.display = "none";
                backButton.style.display = "block";
            }
        });
    }
}
localProduct();

const bascketShow = function () {
    if (localStorage.getItem("user")) {
        bascet = JSON.parse(localStorage.getItem("user")) || [];
        bascet.forEach((item) => renderBasket(item.array));
    }
    localProduct();
};
bascketShow();

function calcTotalPrice() {
    const cardsItems = document.querySelectorAll(".bascet__item-block");
    const cardsTotalPrice = document.querySelector(".bascet__total-price span");

    let cardsTotalValue = 0;

    cardsItems.forEach((item) => {
        const itemCount = item.querySelector(".result");
        const itemPrice = item.querySelector(".bascet__price");

        const itemTotalPrice = +itemCount.textContent * +itemPrice.dataset.price;

        cardsTotalValue += itemTotalPrice;

        itemPrice.textContent = itemTotalPrice;
    });

    cardsTotalPrice.textContent = formater.format(Math.floor(cardsTotalValue));
}
calcTotalPrice();

bascetPage.addEventListener("click", (e) => {
    const target = e.target;
    let countItems, countMinus;

    if (target.matches(".remove")) {
        const itemRemove = target.closest(".bascet__item-block");

        const id = itemRemove.dataset.id;

        removeItem(id);
        calcTotalPrice();
    }

    if (target.matches(".plus") || target.matches(".minus")) {
        const counter = target.closest(".bascet__quantity");

        const productItem = target.closest(".bascet__item-block");

        countItems = counter.querySelector(".result");
        countMinus = counter.querySelector(".minus");

        if (target.matches(".plus")) {
            countItems.textContent = ++countItems.textContent;
            countMinus.disabled = false;

            calcTotalPrice();
            saveProductsPlus(productItem.dataset.id);
        }

        if (target.matches(".minus")) {
            countItems.textContent = --countItems.textContent;

            if (countItems.textContent <= 0) {
                countMinus.disabled = true;
            }
            calcTotalPrice();
            saveProductsMinus(productItem.dataset.id);
        }
    }
});

function removeItem(id) {
    let removeItemArray = [];

    const removeItems = JSON.parse(localStorage.getItem("user")) || [];

    removeItems.forEach((item) => {
        const newArray = item.array.filter((item) => item.id !== id);

        item.array = newArray;

        removeItemArray.push(item);

        localStorage.setItem("user", JSON.stringify(removeItemArray));

        bascetPage.innerHTML = "";

        bascketShow();
    });
}

function saveProductsPlus(id) {
    const userCountArray = [];
    const userSaveCount = JSON.parse(localStorage.getItem("user"));

    userSaveCount.forEach((item) => {
        item.array.forEach((count) => {
            if (id == count.id) {
                count.quantity++;
            }
        });
        userCountArray.push(item);
        localStorage.setItem("user", JSON.stringify(userCountArray));
    });
}

function saveProductsMinus(id) {
    const userCountArray = [];
    const userSaveCount = JSON.parse(localStorage.getItem("user"));

    userSaveCount.forEach((item) => {
        console.log(item);
        item.array.forEach((count) => {
            if (id == count.id) {
                count.quantity--;
            }
        });
        userCountArray.push(item);
        localStorage.setItem("user", JSON.stringify(userCountArray));
    });
}

buyBtn.addEventListener("click", () => {
    alertText("Спасибо за покупку", "./index.html");
});

backButton.addEventListener("click", () => {
    window.location.href = "./index.html";
});
