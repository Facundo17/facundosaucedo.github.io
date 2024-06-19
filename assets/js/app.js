const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

/* elementos de la barra de navegación */
const burger = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");
const navLink = document.querySelectorAll(".nav-link");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/* agregar o quitar clase show */
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
