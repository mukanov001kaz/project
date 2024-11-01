export function slider() {
    const img = document.querySelectorAll(".slider__image"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        sliderPagination = document.querySelector(".slider__pagination");

    let sliderIndex = 1;

    function showSlider(index) {
        if (index > img.length) {
            sliderIndex = 1;
        }

        if (index < 1) {
            sliderIndex = img.length;
        }

        img.forEach((img) => (img.style.display = "none"));
        img[sliderIndex - 1].style.display = "block";
    }

    showSlider(sliderIndex);

    function plusSlider(index) {
        showSlider((sliderIndex += index));
        dotsShow();
    }

    prev.addEventListener("click", () => plusSlider(-1));
    next.addEventListener("click", () => plusSlider(1));

    for (let i = 1; i <= img.length; i++) {
        const li = document.createElement("li");
        li.classList.add("slider__pagination-list");
        li.textContent = i;

        sliderPagination.append(li);
    }

    const dots = document.querySelectorAll(".slider__pagination-list");

    function dotsShow() {
        dots.forEach((dots) => dots.classList.remove("active"));
        dots[sliderIndex - 1].classList.add("active");
    }
    dotsShow();

    function currentSlider(i) {
        showSlider((sliderIndex = i));
    }

    dots.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            currentSlider(index + 1);
            dotsShow();
        });
    });
}
