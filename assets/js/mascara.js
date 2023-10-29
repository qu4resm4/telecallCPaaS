const cpfInput = document.querySelector("#cpf");
const celInput = document.querySelector("#tel-cel");
const fixInput = document.querySelector("#tel-fix");


function maskPhone(input) {
        var valorLimpo = input.value.replace(/\D/g, "").substring(0, 10);
        var numerosArray = valorLimpo.split("");
        var numeroFormatado = ""
        //PROBLEMA: ddd não apaga 
        if(numerosArray.length === 1){
            numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
        };
        if(numerosArray.length > 2){
            numeroFormatado += `${numerosArray.slice(2,6).join("")}`;
        };
        if(numerosArray.length > 6){
            numeroFormatado += `-${numerosArray.slice(6,10).join("")}`
        };
    
        input.value = numeroFormatado;
    };
    
    function maskCPF(input){
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
    };
    
    celInput.addEventListener("input", (event) => {
        maskPhone(celInput);
    });
    fixInput.addEventListener("input", (event) => {
        maskPhone(fixInput);
    });
    cpfInput.addEventListener("input", (event) => {
        maskCPF(cpfInput);
    });
    
    //(01) 2345-6789
