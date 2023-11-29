let nome = ''
let idade = 0
let altura = 0
let peso = 0

nome=prompt('digite seu nome')
idade=prompt('digite a sua idade')
altura=prompt('digite a sua altura')
peso= prompt('digite o seu peso')

let anoNasc = 0
anoNasc = 2023 - idade
let imc= 0
imc= peso / (altura*altura)

console.log('Ola ' + nome + ' você tem ' + idade + ' anos, nasceu hein ' + anoNasc + ', tem ' + altura+ ' de altura, pesa '+ peso+' kg e seu imc é '+imc+ ' kg/m2') 