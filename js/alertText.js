export function alertText(text, href) {
    let modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal__content">
            <h2>${text}</h2>
            <button class="btn btn-primary modal__btn">OK</button>
        </div>  
    `;

    document.body.append(modal);

    document.querySelector(".modal").addEventListener("click", (e) => {
        const target = e.target;
        console.log(target);

        if (
            target.classList.contains("modal") ||
            (target.classList.contains("modal__btn") && target !== target.classList.contains("modal__content"))
        ) {
            window.location.href = href;
        }
    });
}
