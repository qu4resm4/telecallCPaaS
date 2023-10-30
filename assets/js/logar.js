//não precisa declarar uma constante selecionando o elemento form, pois já foi feito no validacao.js é carregado antes
var localStorage_UserLogado, userLogado, localStorage_UsersCadastrados, usersCadastrados;
function set(chave) {
    localStorage.setItem("UserLogado", chave)
    return localStorage.getItem("UserLogado")
}

function get(){
    return localStorage.getItem("UserLogado");
}
localStorage_UserLogado = get() === null ? set() : get();
console.log(typeof localStorage.getItem("UserLogado"));

userLogado = localStorage_UserLogado.split().filter(item => item !== 'undefined')
console.log(userLogado)

localStorage_UsersCadastrados = localStorage.getItem("arrayUsersCadastrados")
usersCadastrados = localStorage_UsersCadastrados.split()
console.log(usersCadastrados)

