//chamando elementos usados
const form = document.querySelector("form");
const nameInput = document.querySelector("#nome");
const motherInput = document.querySelector("#nome-mae");
const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirm");
const campos = document.querySelectorAll("input, select")
const spans = document.querySelectorAll("span")

console.log(nameInput)

// resposta visual aos erros de preenchimento
function setErro(index, mensagem){
    campos[index].style.border = '1px solid red';
    spans[index].style.display = 'block';
    spans[index].innerHTML = mensagem;
};

// reset setErro
function resetErro(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
    spans[index].innerHTML = '';
}

//  verificar se está vazio e setErro (campos vazio quando enviados tem valor vazio tipo de dado string, verifiquei todos usando typeof nome.value no log do console)
function verificarCampoVazio(event) {
    //  percorre todos os elementos de campos
    campos.forEach((campo, index) => {
        //verifica se tá vazio
        if (campo.value === "") {
            event.preventDefault();
            setErro(index, 'Preenchimento obrigatório');
            return;
        };
    });
};

// verificar caracteres mínimos e setErro
function verificarMinChars(inputLength, indexInput, minChars, event) {
    if(minChars > inputLength){
        event.preventDefault();
        const mensagem = `Mínimo de ${minChars} caracteres`
        setErro(indexInput, mensagem)
    };
};

/*
//  função limite máximo de caracteres
function limitarCaracteres(event, inputLength, maxChars) {
    if(inputLength >= maxChars){
        event.preventDefault();
    }
};
*/

// função verifica tipos de caracteres
function verificarCaracteres(input, event, index) {
    const mensagem = 'Apenas caracteres alfabéticos são aceitos neste campo.';
    const pattern = /[^A-Za-z\s]+/g;
    if(pattern.test(input.value)){
        event.preventDefault()
        setErro(index, mensagem)
    };
};

// função verificar se confirm é igual a password
function verifiicarConfirm(password, confirmPass, index, event) {
    const mensagem = 'As senhas não coincidem. Tente novamente.';
    if(password.value !== confirmPass.value) {
        event.preventDefault()
        setErro(index, mensagem)
    };
};

//  nova função de limitar caracteres a uma quantidade máxima e a caracteres especificos
function tipoCaracteres(input, maxChars, pattern) {
    var valor = input.value.replace(pattern, "").substring(0, maxChars);
    return valor;
};

// ouvindo eventos no input para substituir caracteres que não forem alfabeticos por "" (vazio)
// e definindo máximo de caracteres utilizando o método substr(), atribuindo a variavel valor o subtring de determinado tamanho, limitando ao valor o determinado tamanho
// precisa do if verificando se é diferente de null para funcionar validacao.js no login pois daria erro se executar um addEventListner em um elemento que tem valor null, pois não existe no formulário o campo dele, como por exemplo nameInput
if(!(nameInput === null)){
    nameInput.addEventListener("input", (event) => {
        nameInput.value = tipoCaracteres(nameInput, 60, /[^A-Za-z\s]+/g)
    });
}
if(!(motherInput === null)){
motherInput.addEventListener("input", (event) => {
    motherInput.value = tipoCaracteres(motherInput, 60, /[^A-Za-z\s]+/g)
});
}
if(!(loginInput === null)){
loginInput.addEventListener("input", (event) => {
    loginInput.value = tipoCaracteres(loginInput, 6, /[^A-Za-z]+/g)
});
}
if(!(passwordInput === null)){
passwordInput.addEventListener("input", (event) => {
    passwordInput.value = tipoCaracteres(passwordInput, 8, /[^A-Za-z]+/g)
});
}
if(!(confirmInput === null)){
confirmInput.addEventListener("input", (event) => {
    confirmInput.value = tipoCaracteres(confirmInput, 8, /[^A-Za-z]+/g)
});
}

/*
//  contadores de caracteres, limitando caracteres e tipos de caracteres
nameInput.addEventListener("keypress", (event) => {
    //comprimento do elemento em tempo real pq está dentro do keypress
    const nameLength = nameInput.value.length;
    const max = 60;
    limitarCaracteres(event, nameLength, max);
});

loginInput.addEventListener("keypress", (event) => {
    //comprimento do elemento em tempo real pq está dentro do keypress
    const loginLength = loginInput.value.length;
    const max = 6;
    limitarCaracteres(event, loginLength, max);
});

passwordInput.addEventListener("keypress", (event) => {
    //comprimento do elemento em tempo real pq está dentro do keypress
    const passwordLength = passwordInput.value.length;
    const max = 8;
    limitarCaracteres(event, passwordLength, max);
});

confirmInput.addEventListener("keypress", (event) => {
    const confirmLength = confirmInput.value.length;
    const max = 8;

    // gambiarra do caralho percebi agora mas vou deixar comentado pra você ver ai e avaliar
    /*
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;
    var indexConfirmInput = undefined;
    const mensagem = 'As senhas não coincidem. Tente novamente.';

    campos.forEach((campo, chave) => {
        if (campo == confirmInput) {
            indexConfirmInput = chave;
        }
      });

    if((confirmPassword == '') || (password.includes(confirmPassword))){
        resetErro(indexConfirmInput);
    };

    if(!(password.includes(confirmPassword))) {
        setErro(indexConfirmInput, mensagem);
    };
    *\
    limitarCaracteres(event, confirmLength, max);
});
*/

    // instanciando index dos campos (metódos findIndex e indexOf não funcionam diretamente na instancia campos pois é do tipo Object, para usá-los é necessário passar para array, pesquisei sobre os metódos e verifiquei o tipo da variavel campos usando log do console para mostrar o typeof campos)
    // usando um forEach e condicionais para recuperar a chave do input correspondente
    // isso é importante para que funcione tanto no cadastro quando no login pois em um o campos tem 10 chaves e o outro 2; não testei a validação no login ainda, veremos
    var indexNameInput, indexLoginInput, indexPasswordInput, indexConfirmInput;
    campos.forEach((campo, chave) => {
        if (campo == nameInput) {
            indexNameInput = chave;
        }
        if (campo == loginInput) {
            indexLoginInput = chave;
        }
        if (campo == passwordInput) {
            indexPasswordInput = chave;
        }
        if (campo == confirmInput) {
            indexConfirmInput = chave;
        }
      });

//  verificar erros ao submeter formulário
form.addEventListener("submit", (event) => {
    // chamando função de verificar campos vazios
    verificarCampoVazio(event);

    // instanciando comprimento dos campos ao envio
    const nameLength = nameInput.value.length;
    const loginLength = loginInput.value.length;
    const passwordLength = passwordInput.value.length;
    const confirmLength = confirmInput.value.legth;

    // chamando função de verificar comprimento do campo
    verificarMinChars(nameLength, indexNameInput, 15, event)
    verificarMinChars(loginLength, indexLoginInput, 6, event)
    verificarMinChars(passwordLength, indexPasswordInput, 8, event)
    verificarMinChars(confirmLength, indexConfirmInput, 8, event)
    
    // chamando função verificar se tem caracteres que não sejam alfabeticos nos inputs
    verificarCaracteres(nameInput, event, indexNameInput);
    verificarCaracteres(loginInput, event, indexLoginInput);
    verificarCaracteres(passwordInput, event, indexPasswordInput);
    verificarCaracteres(confirmInput, event, indexConfirmInput);

    verifiicarConfirm(passwordInput, confirmInput, indexConfirmInput, event);
});