const aboutMe = document.querySelector("#panel");

aboutMe.addEventListener("animationend", () => {
    aboutMe.classList.remove("animate__bounceInRight", "animate__delay-5s");
});