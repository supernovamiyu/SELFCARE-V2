const menuOpenButton = document.querySelector("#menu-open-button");

menuOpenButton.addEventListener("click", () => {
    //Ver el menú
    document.body.classList.toggle("show-mobile-menu")
})