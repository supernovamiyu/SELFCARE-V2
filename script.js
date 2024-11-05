const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //Ver el menú
    document.body.classList.toggle("show-mobile-menu")
});

// Cerrar el menú cuando el botón de cerrado es clicado
menuCloseButton.addEventListener("click", () => menuOpenButton.click());