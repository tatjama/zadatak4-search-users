const themeContainer = document.querySelector(".theme-container");
const body = document.querySelector("body");
const light = `<button class="theme theme--light" onclick="changeToLight()">
    Light
    <img src="./assets/icon-sun.svg" alt="sun"/>
  </button>`
const dark = `
<button class="theme theme--dark" onclick="changeToDark()">
    Dark
    <img src="./assets/icon-moon.svg" alt="moon"/>
  </button>
`

const changeToDark = () => {    
body.classList.add("dark-mode");
body.classList.remove("light-mode");
themeContainer.innerHTML  = light;
}
const changeToLight = () => {
body.classList.remove("dark-mode");
body.classList.add("light-mode");
themeContainer.innerHTML =dark;
}
let userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
if(!userPrefersLight){body.classList.add("dark-mode")};
themeContainer.innerHTML = userPrefersLight? dark: light;
