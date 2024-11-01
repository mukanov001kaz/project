import { renderProduct, product } from "./renderProduct.js";

const sort = function (data) {
    let sortArray = [];

    const sortSelect = document.querySelector(".sort");

    sortSelect.addEventListener("change", (e) => {
        const itemData = document.querySelectorAll(".product__item");

        const sortResult = [...itemData].sort((a, b) => {
            const priceA = +a.querySelector(".product__price").textContent,
                priceB = +b.querySelector(".product__price").textContent;

            if (sortSelect.value === "asc") {
                if (priceA < priceB) return -1;
            } else if (sortSelect.value === "desc") {
                if (priceA > priceB) return -1;
            }
        });

        product.innerHTML = "";
        sortArray = [];

        sortResult.forEach((item) => {
            const img = item.querySelector(".product__image"),
                title = item.querySelector(".product__title"),
                price = item.querySelector(".product__price");

            const sortObj = {
                image: img.src,
                title: title.textContent,
                price: price.textContent,
            };

            sortArray.push(sortObj);
        });

        renderProduct(sortArray);
    });
};

export { sort };
