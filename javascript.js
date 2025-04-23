
var velocidade = parseFloat(prompt("Digite a velocidade do carro: "))

const permitida = 50 
const valor = 250
const porcetagem_1 = 0.15
const porcetagem_2 = 0.25
const porcetagem_3 = 0.35
const porcetagem_4 = 0.50

if (velocidade == 0 || velocidade < 0) {
    console.log("velocidade invalida!")
}
else if  (velocidade <= 50) {
    console.log("Você está dentro do limite de velocidade permitido.")
}

else if (velocidade > 50 && velocidade <= 60) {
    multa = valor + (valor * porcetagem_1)
    console.log("Você foi multado! O valor da multa é de R$" + (multa).toFixed(2))
}

else if (velocidade > 60 && velocidade <= 70) {
    multa = valor + (valor * porcetagem_2)
    console.log("Você foi multado! O valor da multa é de R$" + (multa).toFixed(2))
}

else if (velocidade > 70 && velocidade <= 80) {
    multa = valor + (valor * porcetagem_3)
    console.log("Você foi multado! O valor da multa é de R$" + (multa).toFixed(2))
}


else if (velocidade > 80 && velocidade <= 250) {
    multa = valor + (valor * porcetagem_4)
    console.log("Você foi multado! O valor da multa é de R$" + (multa).toFixed(2))
}

else{
console.log("OPS! Algo deu errado!")
}


