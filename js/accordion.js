export function accordion() {
    const accrodionBtn = document.querySelectorAll(".accordion__item-button");
    const content = document.querySelectorAll(".accordion__item-content");

    accrodionBtn.forEach((btn) => {
        content[0].style.maxHeight = content[0].scrollHeight + "px";

        btn.addEventListener("click", () => {
            const contentNext = btn.nextElementSibling;

            if (contentNext.style.maxHeight) {
                content.forEach((item) => (item.style.maxHeight = null));
            } else {
                content.forEach((item) => (item.style.maxHeight = null));
                contentNext.style.maxHeight = contentNext.scrollHeight + "px";
            }
        });
    });
}
