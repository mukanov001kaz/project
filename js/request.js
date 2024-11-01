const request = function (url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("data", JSON.stringify(data));
        });
};

export { request };
