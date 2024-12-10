import { load } from "./load.js"

let div = document.createElement('div')
div.className  = "divButton"

export function boton1(){
    div.innerHTML = '';
    if (!localStorage.getItem('boton1') || localStorage.getItem('boton1') == null || localStorage.getItem('boton1') == 0){
        localStorage.setItem('boton1', -200)
    }
    let button = document.createElement('button')
    button.textContent = "+1 pets/s"

    button.onclick = function () {
        let clicks = parseFloat(localStorage.getItem('clicks'))
        let precioBoton = parseInt(localStorage.getItem('boton1'))
        let porSegundo = parseFloat(localStorage.getItem('porSegundo'))

        if (clicks >= Math.abs(precioBoton)){
            clicks = clicks + parseFloat(precioBoton)
            precioBoton = Math.round(precioBoton * 1.2)
            porSegundo = porSegundo + 1
            localStorage.setItem('clicks', clicks.toFixed(1))
            localStorage.setItem('boton1', precioBoton)
            localStorage.setItem('porSegundo', porSegundo.toFixed(1))
            load();
        }
    }

    let precio = document.createElement('p')
    precio.textContent = localStorage.getItem('boton1')

    div.appendChild(button)
    div.appendChild(precio)

    return div
}

