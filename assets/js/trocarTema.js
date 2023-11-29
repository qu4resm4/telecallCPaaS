var body = document.querySelector("body");
const btnTroca = document.querySelector("#tema");
const sun = document.querySelector(".claro");
const moon = document.querySelector(".escuro");
const img = document.querySelector("#imgjpg")
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
    body.classList.toggle('dark')
    moon.classList.add('none')
    sun.classList.remove('none')
}

btnTroca.addEventListener('click', () => {
    tema = get("tema")
    if(tema == 'dark') {
        localStorage.setItem('tema', 'light')
        console.log('verificado dark')
        img.classList.remove('none')
    }
    if (tema == 'light') {
        localStorage.setItem('tema', 'dark')
        console.log('verificado light')
        img.classList.add("none")
    }
    body.classList.toggle('dark')
    moon.classList.toggle('none')
    sun.classList.toggle('none')
})