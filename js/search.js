const search = function () {
    const searchInput = document.querySelector(".search__input");
    const productPage = document.querySelector(".product");

    let seacrhArray = [];

    searchInput.addEventListener("input", () => {
        const productItemSearch = Array.from(document.querySelectorAll(".product__item"));

        productItemSearch.forEach((item) => {
            if (item.textContent.toLowerCase().includes(searchInput.value)) {
                item.style.display = "grid";
            } else {
                item.style.display = "none";
            }
        });
    });
};

export { search };
