
var velocidade = parseFloat(prompt("Digite a velocidade do carro: "))

const permitida = 50 
const valor = 250
const porcetagem_1 = valor + (valor * 0.15)
const porcetagem_2 = valor + (valor * 0.25)
const porcetagem_3 = valor + (valor * 0.35)
const porcetagem_4 = valor + (valor * 0.50)



switch (true){
    case velocidade == 0 || velocidade < 0:
        console.log("velocidade invalida!")
        break
    case velocidade <= 50:
        console.log("Você está dentro do limite de velocidade permitido.")
        break
    case velocidade > 50 && velocidade <= 60:
        console.log("Você foi multado! O valor da multa é de R$" + (porcetagem_1).toFixed(2))
        break
    case velocidade > 60 && velocidade <= 70:       
        console.log("Você foi multado! O valor da multa é de R$" + (porcetagem_2).toFixed(2))
        break   
    case velocidade > 70 && velocidade < 80:
        console.log("Você foi multado! O valor da multa é de R$" + (porcetagem_3).toFixed(2))
        break  
    case velocidade > 80 && velocidade < 250:
        console.log("Você foi multado! E esta em alta velocidade ! " + (porcetagem_4).toFixed(2))
        break
    default:
        console.log("OPS! Algo deu errado!")
        break

}

