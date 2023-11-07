//não precisa instanciar os elementos passwordInput nem o loginInput pq o script de validação já faz isso e é executado antes
var login = localStorage.getItem("login");
var senha = localStorage.getItem("senha");
// isntanciando valores do localStorage login LOGADO.
var localStorage_LoginLogado;
function set(chave, valor) {
    localStorage.setItem(chave, valor)
    return localStorage.getItem(chave)
}

function get(chave){
    return localStorage.getItem(chave)
}
localStorage_LoginLogado = get("loginLOGADO") === null ? set("loginLOGADO") : get("loginLOGADO");

// função para setar span de erro no formulário
function setErroPassword(){
    campos[0].style.border = '1px solid red';
    campos[1].style.border = '1px solid red';
    spans[1].style.display = 'block';
    spans[1].innerHTML = 'Login ou senha incorretos';
};
form.addEventListener("submit", (e) => {
        // pegar o cadastro e verificar ao submit do login se eles batem, caso contrário exibir um span de erro: Login ou senha incorretos
        if ((loginInput.value.length == 6) && (passwordInput.value.length == 8)) {
            if ((loginInput.value !== login) || (passwordInput.value !== senha)) {
                setErroPassword();
            } else {
                // logado é true
                localStorage.setItem("loginLOGADO", "true")
            }
        }

})
// anotaçao: para desligar  efeitos de logado setar false usar mecanica de resgatar no localStorage 