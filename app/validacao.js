function verificaChuteValorValido(){
    const numero = + chute

    if(chuteForInvalido(numero)){
        console.log('Valor invalido')
    }

    if(numeroForMaiorouMenor(numero)){
        console.log(`Valor inválido: O numero precisa ser menor que ${maiorValor} e maior que ${menorValor}`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorouMenor(numero) {
    return numero > maiorValor || numero < menorValor
}
