
// anotaçao: para desligar  efeitos de logado setar false usar mecanica de resgatar no localStorage
const btnDeslog = document.querySelector(".deslogar");
const isLogged = localStorage.getItem("loginLOGADO");
const logado = document.querySelector(".logado-icon");
const btnEntrar = document.querySelector("#btn-entrar");

btnDeslog.addEventListener("click", (e) => {
    localStorage.setItem("loginLOGADO", "")
    location.reload()
});

if(isLogged == "true"){
    btnEntrar.style.display = "none";
    logado.style.display = "block";
}
/*
//responsivo -- 992
//tirar ml-5 da div com id="div-ml-5"
//por p-0 na div do conteiner fluid

const ml_5 = document.querySelector("#div-ml-5");
const con_fluid = document.querySelector(".container-fluid");
const body = document.querySelector("body");
var parent = ml_5.parentNode

console.log(body.clientWidth)

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('resize', function() {
        var filhosTemporarios = Array.from(ml_5.childNodes);

        if (body.clientWidth < 992) {
            console.log("condicionado")
            con_fluid.classList.add("p-0")
            btnEntrar.classList.remove("mx-5")
            if (ml_5 && ml_5.parentNode) {
                // Substitua o elemento a ser removido pelos seus filhos
                ml_5.replaceWith(...ml_5.childNodes);
            }

        }

            if (ml_5 && ml_5.parentNode) {
                // Armazene temporariamente os filhos
                if (body.clientWidth >= 992) {
                    var novoML = document.createElement('div');
                    novoML.classList.add('ml-5'); // Adicione a classe 'ml-5'
                    novoML.id = 'div-ml-5';

                     // Adicione os filhos ao novo elemento pai
                    filhosTemporarios.forEach(function(filho) {
                        novoML.appendChild(filho.cloneNode(true)); // Clone os filhos para evitar removê-los do elemento original
                    });

                    document.body.header.nav.div.appendChild(novoML);
                }
            }

    });
});

// descobri que na realidade se usa s e e ao inves de l e r kkkkkkkkkk
// meu erro: foi ml-auto e mr-auto não estavam sendo aplicados porque o uso correto é ms (margin-start) e me (margin-end)

*/