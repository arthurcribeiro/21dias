let nome = (prompt('insira seu nome'))
let idade = Number(prompt('insira sua idade'))
let cnh =(prompt('voce tem cnh?'))
let carro = (prompt('vc possui carro?'))

if( idade < 18 || cnh === 'nao') {
    console.log(nome + ", vc n pode dirigir")}
else if(idade >= 18 && cnh === "sim" && carro === 'nao'){
    console.log(nome+ ', vc tem cnh mas ta precisando de um poçante')
}
else if(idade >=18 && cnh ==='sim' && carro ==='sim'){
    console.log('éééé ' + nome + ' ,tu vai ter q ser nosso motorista'  )
}
