const changeLanguages = document.getElementById("languages");
const flag = document.getElementById("flag");

// Función para cargar un archivo JSON
function loadJSON(file, callback) {
  fetch(file)
    .then((resp) => resp.json())
    .then((json) => callback(json));
}

// Función para establecer el idioma
function setLanguage(lang) {
  loadJSON("assets/languages/" + lang + ".json", function (translations) {
    const jsonObj = translations;

    const jsonKeys = getKeys(jsonObj);

    jsonKeys.forEach((key) => {
      const subObj = getValue(jsonObj, key);

      Object.keys(subObj).forEach((key) => {
        setElementValue(key, subObj[key]);
      });
    });
  });
}

function getKeys(jsonList) {
  return Object.keys(jsonList);
}

function getValue(jsonObj, key) {
  return jsonObj[key];
}

function setElementValue(id, value) {
  const el = document.getElementById(id);

  if (el.classList && el.classList.contains("input-field")) {
    el.placeholder = value;
  } else if (el.classList && el.classList.contains("submit-btn")) {
    el.value = value;
  } else {
    el.textContent = value;
  }
}

function setFlag(lang) {

  switch (lang) {
    case "es":
        flag.classList.add("spain");
        break;
    case "en":
        flag.classList.remove("spain");
        break;
  }
}

// Establecer idioma predeterminado
window.onload = function () {
  setLanguage("en"); // o 'en' para ingles por defecto
};

// cambiar idioma
changeLanguages.addEventListener("click" ,(event) => {
  let lang = event.target.classList[0];

  setLanguage(lang);
  setFlag(lang);
});
/*changeLanguages.addEventListener("change", () => {
  setLanguage(changeLanguages.value);
  setFlag(changeLanguages.value);
});*/
