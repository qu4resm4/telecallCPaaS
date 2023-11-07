//não precisa instanciar os elementos passwordInput nem o loginInput pq o script de validação já faz isso e é executado antes

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

// pegar o cadastro e verificar ao submit do login se eles batem, caso contrário exibir um span de erro: Login ou senha incorretos
