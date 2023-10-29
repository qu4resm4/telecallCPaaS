const cpfInput = document.querySelector("#cpf");
const celInput = document.querySelector("#tel-cel");
const fixInput = document.querySelector("#tel-fix");


function maskPhone(input) {
    //precisa ter o raplace para tirar o préfixo se não buga ao tentar apagar
    let valor = input.value.replace("(+55)", '').replace(/\D/g, '').substring(0, 10);

    if (valor.length >= 10) {
        valor = `(+55)${valor.substr(0, 2)}-${valor.substr(2)}`;
    }

    return valor;
    /*
    var v = input.value
    v = v.replace(/\D/g,"").substring(0, 10);
    v = v.replace(/^(\d{2})(\d)/g,"($1) $2");
    console.log(v)
    v = v.replace(/(\d)(\d{4})$/,"$1-$2");
    console.log(v)
    return v;*/
};

    function maskCPF(input){
        var valor = input.value.replace(/\D/g, "").substring(0, 11);

        if (valor.length >= 11) {
            valor = `${valor.substr(0, 3)}.${valor.substr(3, 3)}.${valor.substr(6, 3)}-${valor.substr(9, 2)}`;
        }
    
        return valor;

        /*
        //bugado
        // 111.111.111-00
        var valorLimpo = input.value.replace(/\D/g, "").substring(0, 11);
        var numerosArray = valorLimpo.split("");
        var numeroFormatado = ""
        console.log(numerosArray)
    
        if(numerosArray.length === 1){
            numeroFormatado += `${numerosArray.slice(0,3).join("")}.`;
        };
        if(numerosArray.length > 3){
            numeroFormatado += `${numerosArray.slice(3,6).join("")}.`;
        };
        if(numerosArray.length > 6){
            numeroFormatado += `${numerosArray.slice(6,9).join("")}-`;
        };
        if(numerosArray.length > 9){
            numeroFormatado += `${numerosArray.slice(9,11).join("")}`;
        };
    
        input.value = numeroFormatado
    */
    };

celInput.addEventListener("input", (event) => {
    celInput.value = maskPhone(celInput);
    
});
fixInput.addEventListener("input", (event) => {
    fixInput.value = maskPhone(fixInput);
});
cpfInput.addEventListener("input", (event) => {
    cpfInput.value = maskCPF(cpfInput);
});

