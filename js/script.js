const liga = document.querySelector('.on')
const desliga = document.querySelector('.off')
const localLampada = document.querySelector('.lampada')  

function lampIsBroken(){
    return localLampada.src.indexOf('quebrada') > -1 
}

function ligar(){
    if(!lampIsBroken()){
        localLampada.src = 'acessa.jpg'

    }
}

function desligar(){
    if(!lampIsBroken()){
    localLampada.src = 'desligada.jpg'
    }
}

function quebrar(){
    localLampada.src = 'quebrada.jpg'
}


liga.addEventListener('click', ligar)
desliga.addEventListener('click', desligar)
localLampada.addEventListener('dblclick', quebrar)
localLampada.addEventListener('mouseover', ligar)
localLampada.addEventListener('mouseleave', desligar)


