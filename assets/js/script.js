let visor = ''
let valor1 = 0
let valor2 = 0
let resultado = 0
let labelVisor = document.querySelector('#visor')
let operacao = ''

const reset = function(){
    visor = ''
    labelVisor.innerHTML= visor 
}

const clickn0 = function(){
    visor = visor + '0'
    labelVisor.innerHTML= visor 
}

const clickn1 = function(){
    visor = visor + '1'
    labelVisor.innerHTML= visor 
}

const clickn2 = function(){
    visor = visor + '2'
    labelVisor.innerHTML= visor 
}

const clickn3 = function(){
    visor = visor + '3'
    labelVisor.innerHTML= visor 
}

const clickn4 = function(){
    visor = visor + '4'
    labelVisor.innerHTML= visor 
}
const clickn5 = function(){
    visor = visor + '5'
    labelVisor.innerHTML= visor 
}
const clickn6 = function(){
    visor = visor + '6'
    labelVisor.innerHTML= visor 
}

const clickn7 = function(){
    visor = visor + '7'
    labelVisor.innerHTML= visor 
}
const clickn8 = function(){
    visor = visor + '8'
    labelVisor.innerHTML= visor 
    }

const clickn9 = function(){
    visor = visor + '9'
    labelVisor.innerHTML= visor     
}
const clickOpSom = function(){
    operacao = 'adicao'   
    let numero = parseFloat(visor)
    valor1 = numero
    valor2 = numero
}

const clickOpSub = function(){
    operacao = 'subtracao'   
    let numero = parseFloat(visor)
    valor1 = numero
    valor2 = numero
}

const clickOpMult = function(){
    operacao = 'multiplicacao'   
    let numero = parseFloat(visor)
    valor1 = numero
    valor2 = numero
}

const clickOpDiv = function(){
    operacao = 'divisao'   
    let numero = parseFloat(visor)
    valor1 = numero
    valor2 = numero
}

const igual = function () {
    
    switch(operacao){
        case 'adicao':
            
            
    }
}