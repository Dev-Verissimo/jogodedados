// Declaração das variáveis que serão os valores dos dados
// let number1 = Math.floor(Math.random() * (6 - 1)) + 1
// let number2 = Math.floor(Math.random() * (6 - 1)) + 1

let dado1frente1 = document.getElementsByClassName("dado1")[0]
let dado1frente2 = document.getElementsByClassName("dado2")[0]
let dado1frente3 = document.getElementsByClassName("dado3")[0]
let dado1frente4 = document.getElementsByClassName("dado4")[0]
let dado1frente5 = document.getElementsByClassName("dado5")[0]
let dado1frente6 = document.getElementsByClassName("dado6")[0]
let dado2frente1 = document.getElementsByClassName("dado1")[1]
let dado2frente2 = document.getElementsByClassName("dado2")[1]
let dado2frente3 = document.getElementsByClassName("dado3")[1]
let dado2frente4 = document.getElementsByClassName("dado4")[1]
let dado2frente5 = document.getElementsByClassName("dado5")[1]
let dado2frente6 = document.getElementsByClassName("dado6")[1]


let dados =document.getElementsByClassName("dado")


let soma11 = 0
let soma12 = 0
let soma13 = 0
let soma14 = 0
let soma15 = 0
let soma16 = 0
let soma21 = 0
let soma22 = 0
let soma23 = 0
let soma24 = 0
let soma25 = 0
let soma26 = 0

let contador = 0
let contador2 = 0

for (let i = 0; i < 1000; i++) {
    
    let number1 = Math.floor(Math.random() * (7 - 1)) + 1
    let number2 = Math.floor(Math.random() * (7 - 1)) + 1
    switch (number1) {
        case 1:
            // dados.style.zIndex = '1'
            contador++
            dado1frente1.style.zIndex = contador
            console.log(contador)

            soma11++
            break;
        case 2:
            contador++
            dado1frente2.style.zIndex = contador
            soma12++
            break;
        case 3:
            contador++
            dado1frente3.style.zIndex = contador
            soma13++
            break;
        case 4:
            contador++
            dado1frente4.style.zIndex = contador
            soma14++
            break;
        case 5:
            contador++
            dado1frente5.style.zIndex = contador
            soma15++
            break;
        case 6:
            contador++
            dado1frente6.style.zIndex = contador
            soma16++
            break;
    
        default:
            console.log("erro")
            break;
    }
    switch (number2) {
        case 1:
            contador2++
            dado2frente1.style.zIndex = contador2
            soma21++
            break;
        case 2:
            contador2++
            dado2frente2.style.zIndex = contador2
            soma22++
            break;
        case 3:
            contador2++
            dado2frente3.style.zIndex = contador2
            soma23++
            break;
        case 4:
            contador2++
            dado2frente4.style.zIndex = contador2
            soma24++
            break;
        case 5:
            contador2++
            dado2frente5.style.zIndex = contador2
            soma25++
            break;
        case 6:
            contador2++
            dado2frente6.style.zIndex = contador2
            soma26++
            break;
    
        default:
            console.log("erro")
            break;
    }
}

// -----------------tabela----------------------------
let span1 = document.getElementsByClassName("soma1")[0]
span1.innerHTML = soma11

let span2 = document.getElementsByClassName("soma2")[0]
span2.innerHTML = soma12

let span3 = document.getElementsByClassName("soma3")[0]
span3.innerHTML = soma13

let span4 = document.getElementsByClassName("soma4")[0]
span4.innerHTML = soma14

let span5 = document.getElementsByClassName("soma5")[0]
span5.innerHTML = soma15

let span6 = document.getElementsByClassName("soma6")[0]
span6.innerHTML = soma16


let span21 = document.getElementsByClassName("soma1")[1]
span21.innerHTML = soma21

let span22 = document.getElementsByClassName("soma2")[1]
span22.innerHTML = soma22

let span23 = document.getElementsByClassName("soma3")[1]
span23.innerHTML = soma23

let span24 = document.getElementsByClassName("soma4")[1]
span24.innerHTML = soma24

let span25 = document.getElementsByClassName("soma5")[1]
span25.innerHTML = soma25

let span26 = document.getElementsByClassName("soma6")[1]
span26.innerHTML = soma26


let resultado1 = soma11 + soma12 + soma13 + soma14 + soma15 + soma16
let exibirResultado = document.getElementsByClassName("resultado1")[0]
exibirResultado.innerHTML = resultado1


let resultado2 = soma21 + soma22 + soma23 + soma24 + soma25 + soma26
let exibirResultado2 = document.getElementsByClassName("resultado1")[1]
exibirResultado2.innerHTML = resultado2


// -----------------tabela---fim-----------------------

