//não precisa declarar uma constante selecionando o elemento form, pois já foi feito no validacao.js é carregado antes
const toast = document.querySelector("#toast1");
const toast2 = document.querySelector("#toast2")
const btnTake = document.querySelector(".take");
const btnClose = document.querySelector("#close1");
const btnClose2 = document.querySelector("#close2");
var verificado;

// isntanciando valores do localStorage login e senha.
var localStorage_LoginCadastrado, localStorage_SenhaCadastrada;
function set(chave, valor) {
    localStorage.setItem(chave, valor)
    return localStorage.getItem(chave)
}

function get(chave){
    return localStorage.getItem(chave)
}
localStorage_LoginCadastrado = get("login") === null ? set("login") : get("login");
localStorage_SenhaCadastrada = get("senha") === null ? set("senha") : get("senha");

// função para verificar se existe valores no localStorage
function verificandoLocal(login, senha) {
    console.log("VERIFICANDO O LOCALSOTAGE");
    let loginLocal = localStorage.getItem("login");
    let senhaLocal = localStorage.getItem("senha");

    if (loginLocal == "undefined" || senhaLocal == "undefined" || login == "" || senha == ""){
        verificado = false;
    } else if (loginLocal !== login || senhaLocal !== senha) {
        verificado = true;
    }
    // tem que retorna true se o login ou a senha já estiverem preenchidas
};

// ouvindo botões do toast
btnTake.addEventListener("click", (e) => {
    localStorage.setItem("login", loginInput.value)
    localStorage.setItem("senha", passwordInput.value)
    toast.style.display = "none";
    toast2.style.display = "block";
});
btnClose.addEventListener("click", (e) => {
    toast.style.display = "none";
});

btnClose2.addEventListener("click", (e) => {
    toast2.style.display = "none";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    verificandoLocal(loginInput.value, passwordInput.value)
    // tem que verificar se existem valores no local storage,
    if(verificado){
        toast.style.display = "block";
    } else {
        localStorage.setItem("login", loginInput.value)
        localStorage.setItem("senha", passwordInput.value)
    }

});

/*
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    Hello, world! This is a toast message.
    <div class="mt-2 pt-2 border-top">
      <button type="button" class="btn btn-primary btn-sm take" value=true>Take action</button>
      <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
    </div>
  </div>
</div>
*/