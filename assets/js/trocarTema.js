var body = document.querySelector("body");
var btnTroca = document.querySelector(".tema");

btnTroca.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})