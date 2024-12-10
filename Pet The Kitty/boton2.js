import { load } from "./load.js"

let div = document.createElement('div')
div.className  = "divButton"

export function boton2(){
    div.innerHTML = '';
    if (!localStorage.getItem('boton2') || localStorage.getItem('boton2') == null || localStorage.getItem('boton2') == 0){
        localStorage.setItem('boton2', -500)
    }
    let button = document.createElement('button')
    button.textContent = "+2 pets/s"

    button.onclick = function () {
        let clicks = parseFloat(localStorage.getItem('clicks'))
        let precioBoton = parseInt(localStorage.getItem('boton2'))
        let porSegundo = parseFloat(localStorage.getItem('porSegundo'))

        if (clicks >= Math.abs(precioBoton)){
            clicks = clicks + parseFloat(precioBoton)
            precioBoton = Math.round(precioBoton * 1.2)
            porSegundo = porSegundo + 2
            localStorage.setItem('clicks', clicks.toFixed(1))
            localStorage.setItem('boton2', precioBoton)
            localStorage.setItem('porSegundo', porSegundo.toFixed(1))
            load();
        }
    }

    let precio = document.createElement('p')
    precio.textContent = localStorage.getItem('boton2')

    div.appendChild(button)
    div.appendChild(precio)

    return div
}

