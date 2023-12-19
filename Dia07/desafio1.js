let mediageral = 0  
let qtdHomens = 0
let mulheres7 = 0
let maiornotahomen = 0
let contador = 1

while(contador<=10){
    nota=parseInt(prompt('digite a nota do' + contador+ 'º aluno '))
    sexo= prompt('informe o seu sexo (m/f)')

  if (sexo=='m'){
    if(nota > maiornotahomen){
        maiornotahomen=nota
    }
    qtdHomens++
  }
  if (sexo='f' && nota > 7){
    mulheres7++
  }
  mediageral+=nota
  contador++




}
mediageral=mediageral / 10
console.log('a média geraldos alunos foi: '+ mediageral)
console.log( 'a quantidade de homens cadastrados foi: '+ qtdHomens)
console.log('a quantidadede mulheres q tirou nota a cima de 7 foi: ' + mulheres7)
console.log('a maior nota entre os homens foi' + maiornotahomen)
  