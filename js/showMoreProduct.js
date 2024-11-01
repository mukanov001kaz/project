import { renderProduct } from "./renderProduct.js";

const moreProducts = function (data, firstIndex, lastIndex) {
    const showMoreBtn = document.querySelector(".show__more-btn");

    const showMoreProduct = function (data, firstIndex, lastIndex) {
        const newDataProduct = data.slice(firstIndex, lastIndex);

        renderProduct(newDataProduct);
    };
    showMoreProduct(data, firstIndex, lastIndex);

    showMoreBtn.addEventListener("click", () => {
        let increment = 3;

        firstIndex = lastIndex;
        lastIndex += increment;

        showMoreProduct(data, firstIndex, lastIndex);

        if (lastIndex >= data.length) {
            showMoreBtn.style.display = "none";
        } else {
            showMoreBtn.style.display = "block";
        }
    });
};

export { moreProducts };
