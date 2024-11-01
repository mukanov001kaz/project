const product = document.querySelector(".product");

const renderProduct = function (data) {
    // product.innerHTML = "";

    data.forEach((item) => {
        const { image, title, price, id } = item;

        product.innerHTML += `
            <div class="product__item" id="${id}">
                <div class="product__image-block" >
                    <img src="${image}" alt="${title}" class="product__image"/>
                </div>
                <h2 class="product__title">${title}</h2>
                <span class="product__price">${price}</span>
                <button class="product__add-basket btn btn-primary">Basket</button>
            </div>
        `;
    });
};

export { renderProduct, product };
