export function setLocalStorage(){
    if (!localStorage.getItem('clicks') || localStorage.getItem('clicks') == null){
        localStorage.setItem('clicks', 0)
    }
    
    if (!localStorage.getItem('porCaricia') || localStorage.getItem('porCaricia') == null || localStorage.getItem('porCaricia') == 0){
        localStorage.setItem('porCaricia', 1)
    }
    
    if (!localStorage.getItem('porSegundo') || localStorage.getItem('porSegundo') == null){
        localStorage.setItem('porSegundo', 0)
    }
}