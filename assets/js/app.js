import { checkCookie, deleteCookie, setCookie } from "./cookie-service.js";

let darkmode = false;

// elemento raiz
const root = document.querySelector(":root");

const desplazarArriba = document.querySelector("#display-up");

const loader = document.getElementById("loader");

const body = document.querySelector("body");

/* elementos de la barra de navegación */
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const navLink = document.querySelectorAll(".nav-link");
const darkModeToggle = document.getElementById("darkmode-toggle");
const aboutList = document.querySelectorAll(".about-list");

const panels = document.querySelectorAll(".panel");

/* when page refresh */
window.scrollTo(0, 0);

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
const primaryColor = getVariableValue("--primary-color");
const primaryColorDark = getVariableValue("--primary-color-dark");
const listColor = getVariableValue("--primary-color-link");

function changeBgColor() {
  const currentBg = getVariableValue("--bg-color");

  if (currentBg === bgColor) {
    root.style.setProperty("--bg-color", bgColorDark);
  } else {
    root.style.setProperty("--bg-color", bgColor);
  }
}

function changeBgColor2() {
  const currentBg2 = getVariableValue("--bg-color2");

  if (currentBg2 === bgColor2) {
    root.style.setProperty("--bg-color2", bgColorDark2);
  } else {
    root.style.setProperty("--bg-color2", bgColor2);
  }
}

function changeThemePanels() {
  panels.forEach((el) => {
    el.classList.toggle("dark-theme");
  });
}

function changePrimaryColor() {
  const currentColor = getVariableValue("--primary-color");

  if (currentColor === primaryColor) {
    root.style.setProperty("--primary-color", primaryColorDark);
  } else {
    root.style.setProperty("--primary-color", primaryColor);
  }
}

function changeSubColor() {
  aboutList.forEach( el => {
    el.classList.toggle("dark-theme");
  });
}

function setDarkTheme() {
  changeBgColor();
  changeBgColor2();
  changePrimaryColor();
  changeSubColor();
  changeThemePanels();
}

function showOrHideLoad() {
  /* simular tiempo */

  setTimeout(() => {
    if (loader.style.display === "none") {
      loader.style.display = "block";
    } else {
      loader.style.display = "none";
    }

    body.classList.toggle("body-behavior");

  }, 3000); // 3 seconds
}

// verificar si el darkmode está activado
let checkDarkMode = checkCookie("darkmode");
let clickFromLoad = false;

// cambiar al modo oscuro //
darkModeToggle.addEventListener("click", () => {
  setDarkTheme();

  if (clickFromLoad) {
    clickFromLoad = false;
  } else {
    darkmode = !darkmode;
    deleteCookie("darkmode");
    setCookie("darkmode", darkmode, 25);
  }
});

if (checkDarkMode === "") {
  // no existe la cookie
  darkmode = true;
  setCookie("darkmode", darkmode, 25);
  clickFromLoad = true;
  darkModeToggle.click();
  showOrHideLoad();
} else if (checkDarkMode === "true") {
  // hay una cookie y está activado el darkmode
  darkmode = true;
  clickFromLoad = true;
  darkModeToggle.click();
  showOrHideLoad();
} else {
  showOrHideLoad();
}
