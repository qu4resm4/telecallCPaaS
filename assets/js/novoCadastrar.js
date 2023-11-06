//não precisa declarar uma constante selecionando o elemento form, pois já foi feito no validacao.js é carregado antes

// isntanciando valores do localStorage login e senha.
var localStorage_LoginCadastrado, localStorage_SenhaCadastrada;
function set(chave, valor) {
    localStorage.setItem(`${chave}`, valor)
    return localStorage.getItem(`${chave}`)
}

function get(chave){
    return localStorage.getItem(`${chave}`)
}
localStorage_LoginCadastrado = get("login") === null ? set() : get();
localStorage_SenhaCadastrada = get("senha") === null ? set() : get();

console.log(localStorage.getItem("login"))
console.log(localStorage.getItem("senha"))

// função para verificar se existe valores no localStorage
function verificandoLocal(login, senha) {

    // tem que retorna true se o login ou a senha já estiverem preenchidas
    return 
};

// função para exibir toast de sobrepor valores no localStorage
function recadastrar() {
    // ALTERAR DISPLAY DO TOAST 
    

    const btnTake = document.querySelector(".take");
    let valorBtn = btnTake.value;

    return //tem que retornar um valor, se confirmou o recadastro então 
};


form.addEventListener("submit", (e) => {
    e.preventDefault;

    // tem que verificar se existem valores no local storage,
    
    if(verificandoLocal(loginInput.value, passwordInput.value)){
        let valorRecadastrar = recadastrar()
        if(valorRecadastrar){
            localStorage.setItem("login", loginInput.value)
            localStorage.setItem("senha", passwordInput.value)
        } else {

        }
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