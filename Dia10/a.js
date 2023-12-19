let modelos=[]
let anos=[]
let valores=[]
let continuar=true
let contador=0

while(continuar){
    let modelo = prompt('digite o modelo do carro')
    modelos[contador]=modelo
    let ano = prompt('digite o ano do carro')
    anos[contador]=ano
    let valor=parseFloat(prompt('digite o valor do carro'))
    valores[contador]=valor
    contador++
    let resposta=prompt('deseja listar mais algum carro? (s/n')
    if (resposta == 'n')
    continuar=false
}

console.log('carros cadastrados')
for(let i=0; i<modelos.length;i++){
    console.log(modelos[i]+'-'+anos[i]+ '-'+valores[i])
}