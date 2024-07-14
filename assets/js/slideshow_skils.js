const slides = document.querySelectorAll(".icon-card");
const listPos = new Map();

// set class index
slides.forEach((e, index) => {
  e.classList.add("index" + index);

  listPos.set(index, index);
});

let currentIndex = 0;

function showSlide(key, value) {
  let offset = 200; // 140px la imagen, 20px de padding left and right, 10px margin left and right = 200px
  let currentPos = value;

  // actualizo la posicion en la lista
  if (currentPos >= listPos.size - 1) {
    listPos.set(key, 0);
  } else {
    listPos.set(key, currentPos + 1);
  }

  if (currentPos === listPos.size - 1) {
    offset = -(currentPos - (currentPos - key)) * 200; // obtengo la diferencia de la posición para retroceder -1
  } else {
    offset = (1 + currentPos - key) * 200; // obtengo la diferencia de la posición + 1 para avanzar a la derecha
  }

  let img = document.querySelector(".index" + key);

  // cuando llega al final, automáticamente pasa al principio, sin transition
  if (currentPos === 8) {
    img.classList.add("no-transition");
  } else {
    img.classList.remove("no-transition");
  }

  img.style.transform = `translateX(${offset}px)`;
}

setInterval(() => {
  nextSlide();
}, 3000);

function nextSlide() {
  listPos.forEach((e, key) => {
    showSlide(key, e);
  });
}
