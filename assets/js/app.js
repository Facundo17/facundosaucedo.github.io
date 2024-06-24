// elemento raiz
const root = document.querySelector(":root");

const desplazarArriba = document.querySelector("#display-up");

/* elementos de la barra de navegación */
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const navLink = document.querySelectorAll(".nav-link");
const darkModeToggle = document.getElementById("darkmode-toggle");
const navBg = document.querySelector(".background");

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

// ocultar el menú al hacer clic
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// obtener el valor de una variable
function getVariableValue(name) {
  const value = getComputedStyle(root);
  return value.getPropertyValue(name);
}

// guardar los colores del theme
const bgColor = getVariableValue("--bg-color");
const bgColorDark = getVariableValue("--bg-color-dark");
const bgColor2 = getVariableValue("--bg-color2");
const bgColorDark2 = getVariableValue("--bg-color-dark2");

// cambiar al modo oscuro //
darkModeToggle.addEventListener("click", () => {
  const currentBg = getVariableValue("--bg-color");
  const currentBg2 = getVariableValue("--bg-color2");

  if (currentBg === bgColor) {
    root.style.setProperty("--bg-color", bgColorDark);
  } else {
    root.style.setProperty("--bg-color", bgColor);
  }

  if (currentBg2 === bgColor2) {
    root.style.setProperty("--bg-color2", bgColorDark2);
  } else {
    root.style.setProperty("--bg-color2", bgColor2);
  }
});
