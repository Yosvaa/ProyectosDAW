import { setLocalStorage } from "./localStorage.js"
import { load } from "./load.js"

// localStorage.clear()
setLocalStorage()

let linkFont = document.createElement('link')
linkFont.href = "https://fonts.googleapis.com/css2?family=Doto:wght@850&display=swap"
linkFont.rel = "stylesheet"

let linkCSS = document.createElement('link')
linkCSS.href = "styles.css"
linkCSS.rel = "stylesheet"

document.head.appendChild(linkCSS)
document.head.appendChild(linkFont)

const fullscreenBtn = document.createElement('button');
fullscreenBtn.textContent = 'JUGAR'
fullscreenBtn.style = `
    font-size: 2em;    
`
fullscreenBtn.onclick = function () {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Safari
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    } else {
        alert("Tu navegador no soporta la API de pantalla completa.");
    }

    load()
}

document.body.appendChild(fullscreenBtn)