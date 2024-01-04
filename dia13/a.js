class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo,processador,video,armazenamento,memoriaRam,ssd){
        this.tipo=tipo
        this.processador=processador
        this.video=video
        this.armazenamento=armazenamento
        this.memoriaRam=memoriaRam
        this.ssd=ssd
    }
}

console.log("MEU PC")

let tipo=prompt('Seu pc é um desktop ou um notebook?')
let processador=prompt('Qual o nome do seu processador')
let video=prompt('Seu video é integrado ou dedicado?')
let armazenamento=prompt('Qual o tamanho do seu armazenamento?')
let memoriaRam=prompt('Quantos GB de memória você possui?')
let ssd=prompt('Possui ssd?')

console.log('tipo:'+tipo)
console.log('processador:' +processador)
console.log('placa de vídeo: '+ video)
console.log('armazenamento de: '+ armazenamento)
console.log('memória RAM:' + memoriaRam)
console.log('possui ssd: ' + ssd)