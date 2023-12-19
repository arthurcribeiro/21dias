let nome = prompt('Digite seu nome')
let idade = parseInt(prompt('Digite a sua idade'))
let peso = prompt('Indique seu peso em kg')
let altura = prompt('Indique a sua altura')
let profissao = prompt('Indique a sua profissão')

console.log('Olá, ' + nome + ', você tem ' + idade + ' anos de idade, é ' + profissao + ', pesa '+ peso + ' quilos e tem ' +altura+ 'M de altura.')

if(idade<18){
    console.log('Você não pode beber')}
else if (idade >= 18) {
    console.log('Você ta liberado p tomar umas')
}

let imc = peso / (altura * altura)
if(imc<=18.5){
    console.log('Seu imc é de ' + imc + ' kg/m2 e indica magreza.')
}
else if(imc>=18.6 && imc<=24.9){
    console.log('Seu imc é de ' + imc + ' kg/m2 e indica normalidade.')
}
else if(imc>=25 && imc<=30){
    console.log('Seu imc é de ' + imc + ' kg/m2 e indica sobrepeso.')
}
else if(imc>30){
    console.log('Seu imc é de ' +imc + ' kg/m2 e indica obesidade.')
}

let ano = 2023 - idade
console.log('Você nasceu em ' +ano)

let anoatual = 2023
let anovivido = ano
let idadeatual = 0

for(let anovivido = ano; anovivido <= anoatual; anovivido++){
    console.log( anovivido+ ' - ' + idadeatual + ' anos de idade')
    idadeatual++
}




