
// anotaçao: para desligar  efeitos de logado setar false usar mecanica de resgatar no localStorage
const btnDeslog = document.querySelector(".deslogar");
const isLogged = localStorage.getItem("loginLOGADO");
const logado = document.querySelector(".logado-icon");
const btnEntrar = document.querySelector(".btn-entrar");

btnDeslog.addEventListener("click", (e) => {
    localStorage.setItem("loginLOGADO", "")
    location.reload()
});

if(isLogged == "true"){
    btnEntrar.style.display = "none";
    logado.style.display = "block";
}


