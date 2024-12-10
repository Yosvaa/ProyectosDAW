import { boton } from "./boton.js"
import { boton1 } from "./boton1.js"
import { boton2 } from "./boton2.js"

let clicks = parseFloat(localStorage.getItem('clicks'))

let clicksPrint = document.createElement('p')
clicksPrint.textContent = Math.round(clicks)
clicksPrint.className = 'stats'
clicksPrint.style.fontSize = '3em'

let porCaricia = parseFloat(localStorage.getItem('porCaricia'))
let porCariciaPrint = document.createElement('p')
porCariciaPrint.innerHTML = `${porCaricia}/pet`;
porCariciaPrint.className = 'stats'

let porSegundo = parseInt(localStorage.getItem('porSegundo'))
let porSegundoPrint = document.createElement('p')
porSegundoPrint.textContent = porSegundo + " pets/s"
porSegundoPrint.className = 'stats'

export function load(){
    let main = document.createElement('main')

    let divIzquierda = document.createElement('div')
    let divMedio = document.createElement('div')
    let divDerecha = document.createElement('div')

    let titulo = document.createElement('h2')
    titulo.textContent = 'Pet the Kitty'

    let gato = document.createElement('img')
    gato.src = "img/gato.jpg"
    gato.className = 'gato'

    gato.addEventListener("mouseenter", function() { 
        gato.style.width = `11.1em`
    });

    gato.addEventListener("mouseleave", function() {
        porCaricia = parseFloat(localStorage.getItem('porCaricia'))
        clicks = parseFloat(localStorage.getItem('clicks'))
        clicks = clicks + porCaricia
        clicksPrint.textContent = Math.round(clicks)
        localStorage.setItem('clicks', clicks.toFixed(1))
        gato.style.width = `11em`
    });

    document.body.textContent = '';

    divIzquierda.appendChild(boton1())
    divIzquierda.appendChild(boton2())
    divMedio.appendChild(gato)
    divDerecha.appendChild(boton())

    main.appendChild(divIzquierda)
    main.appendChild(divMedio)
    main.appendChild(divDerecha)

    document.body.appendChild(titulo)
    document.body.appendChild(main)
    document.body.appendChild(clicksPrint)
    document.body.appendChild(porCariciaPrint)
    document.body.appendChild(porSegundoPrint)
}

setInterval(() => {
    clicks += porSegundo
    clicksPrint.textContent = Math.round(clicks)
    porSegundoPrint.textContent = porSegundo + " pets/s"
    localStorage.setItem('clicks', clicks.toFixed(1))
}, 1000);

