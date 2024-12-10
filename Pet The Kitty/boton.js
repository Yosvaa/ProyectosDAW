import { load } from "./load.js"

let div = document.createElement('div')
div.className  = "divButton"

export function boton(){
    div.innerHTML = '';
    if (!localStorage.getItem('boton') || localStorage.getItem('boton') == null || localStorage.getItem('boton') == 0){
        localStorage.setItem('boton', -100)
    }
    let button = document.createElement('button')
    button.textContent = "+0.1/pet"

    button.onclick = function () {
        let clicks = parseFloat(localStorage.getItem('clicks'))
        let precioBoton = parseInt(localStorage.getItem('boton'))
        let porCaricia = parseFloat(localStorage.getItem('porCaricia'))

        if (clicks >= Math.abs(precioBoton)){
            clicks = clicks + parseFloat(precioBoton)
            precioBoton = Math.round(precioBoton * 1.10)
            porCaricia = porCaricia + 0.1
            localStorage.setItem('clicks', clicks.toFixed(1))
            localStorage.setItem('boton', precioBoton)
            localStorage.setItem('porCaricia', porCaricia.toFixed(1))
            load();
        }
    }

    let precio = document.createElement('p')
    precio.textContent = localStorage.getItem('boton')

    div.appendChild(precio)
    div.appendChild(button)
    
    return div
}

