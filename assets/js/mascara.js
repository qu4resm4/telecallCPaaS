const cpfInput = document.querySelector("#cpf");
const celInput = document.querySelector("#tel-cel");
const fixInput = document.querySelector("#tel-fix");

celInput.addEventListener("input", (event) => {
    //
    var valorLimpo = celInput.value.replace(/\D/g, "").substring(0, 11);

    var numerosArray = valorLimpo.split("");

    var numeroFormatado = ""

    if(numerosArray.length > 0){
        numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
    };
    
    celInput.value = numeroFormatado;
});
