var body = document.querySelector("body");
const btnTroca = document.querySelector("#tema");
const sun = document.querySelector(".claro");
const moon = document.querySelector(".escuro");
var tema;
function set(chave, valor) {
    localStorage.setItem(chave, valor)
    return localStorage.getItem(chave)
}

function get(chave){
    return localStorage.getItem(chave)
}
tema = get("tema") === null ? set("tema", "light") : get("tema");

if (tema == 'dark') {
    body.classList.add('dark')
    moon.classList.add('none')
    sun.classList.remove('none')
}

if (tema == 'light') {
    body.classList.remove('dark')
    moon.classList.remove('none')
    sun.classList.add('none')
}

btnTroca.addEventListener('click', () => {
    tema = get("tema")
    if(tema == 'dark') {
        localStorage.setItem('tema', 'light')
        console.log('verificado dark')            
        body.classList.remove('dark')
        moon.classList.remove('none')
        sun.classList.add('none')
    }
    if (tema == 'light') {
        localStorage.setItem('tema', 'dark')
        console.log('verificado light')    
        body.classList.add('dark')
        moon.classList.add('none')
        sun.classList.remove('none')
    }
})