//não precisa declarar uma constante selecionando o elemento form, pois já foi feito no validacao.js é carregado antes
var localStorage_UsersCadastrados;
function set(chave) {
    localStorage.setItem("arrayUsersCadastrados", chave)
    return localStorage.getItem("arrayUsersCadastrados")
}

function get(){
    return localStorage.getItem("arrayUsersCadastrados");
}
localStorage_UsersCadastrados = get() === null ? set() : get();
console.log(localStorage.getItem("arrayUsersCadastrados"));

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let arrayCadastro = [];
    let strArrayCadastro, arrayUsersCadastrados, recebendo, str2;
    //resgatar id e valor de cada input e armazenalos em uma array
    // -1 no srcElement.length para não pegar o ultimo elemento do form que é o botão de enviar
    for(let i = 0; i < (event.srcElement.length)-1; i++){
        arrayCadastro.push(`${event.srcElement[i].id}: ${event.srcElement[i].value}`)
    };
    // tirando os valores do elementos fieldset que ficam como ': undefined'
    arrayCadastro = arrayCadastro.filter(item => item !== ': undefined');
    console.log(arrayCadastro)
    //fazendo cadastro virar uma strig
    strArrayCadastro = `[${arrayCadastro}]`;
    console.log(strArrayCadastro)
    //transformando o arrayUsersCadastro em um array e inserindo no final dele o cadastro feito
    //recebendo valor convertido em array
    recebendo = localStorage_UsersCadastrados.split();
    console.log(recebendo);
    //removendo valor undefined da array, esse valor é setado no operador ternário da variavel localStorage_UsersCadastrados pois não há parametros ao chamar a função set
    arrayUsersCadastrados = recebendo.filter(item => item !== 'undefined')
    console.log(arrayUsersCadastrados)
    //adicionando o novo
    arrayUsersCadastrados.push(strArrayCadastro)
    console.log(arrayUsersCadastrados)
    // transformando nova instancia em string
    str2 = arrayUsersCadastrados.toString()
    console.log(str2)
    //setando o novo valor da array que guarda os users cadastrados no localstorage
    localStorage.setItem("arrayUsersCadastrados", str2)

    //redirect no final
    window.location.href("login.html")
});
