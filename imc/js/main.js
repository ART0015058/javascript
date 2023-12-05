//Outra forma de escrever uma função
//function limparCamposs (){
    //Código aqui
//}

const calcularImc = () => {
    //Código da função
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if( nome !== "" && peso !== "" && altura  !== "" ) {
        const imc = (peso/(altura*altura))
        //comando para exibir no console 'f12'
        console.log('altura: ', altura);

        let classificacao =""

        if ( imc < 18.5 ) {
            classificacao = 'Abaixo do peso.'
        }
        else if ( imc < 25 ) {
            classificacao = 'Com peso ideal. Parabéns!!!';
        }
        else if (imc < 30) {
            classificacao = 'levemente acima do peso.';
        }
        else if (imc < 35) {
            classificacao = 'Obesidade grau I.';
        }
        else if (imc < 40) {
            classificacao = 'Obesidade grau II.';
        }
        else if (imc < 45) {
            classificacao = 'Obesidade grau III Cuidado!!!.';
        }
        resultado.textContent = `${nome}, seu IMC é ${imc} e você está ${classificacao}`

    }
    else {
        resultado.textContent = 'Preencha todos os campos.';
    }
    
};

const limparCampos = () => {
    //Código aqui
    const nome = document.getElementById("nome").value = null;
    const altura = document.getElementById("altura").value = null;
    const peso = document.getElementById("peso").value = null;

};

/*const mascaraAltura = (value, pattern) => {
    let i = 0;
    let v = string(value);
    v = v.replace(/\D/g, '');
    return pattern.replace(/#/g, () => v[i++] || '');
};

const aplicar = (value) =>{
    const formatado = mascaraAltura(value, '#.##');
    document.getElementById('altura').value = formatado;
}*/

const mascaraAltura = (value, pattern) => {
    let i = 0;  // Corrigindo a inicialização de i
    let v = String(value);  // Corrigindo a obtenção da representação de string
    v = v.replace(/\D/g, '');
    return pattern.replace(/#/g, () => v[i++] || '');  // Corrigindo a chamada de replace
};

const aplicar = (value) => {
    const formatado = mascaraAltura(value, '#.##');
    document.getElementById('altura').value = formatado;
};