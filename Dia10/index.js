let alunos = []
let notas = []
let contador = 0
let continuar = true

while (continuar){
    let nome = prompt('insira o nome do ' + (contador + 1) + ' º aluno')
    let nota = parseInt(prompt('insira a nota do aluno'))
    alunos[contador]=nome
    notas[contador]=nota
    contador++
    let resposta=prompt('deseja inserir mais algum aluno? (s/n)')
    if (resposta== 'n')
    continuar = false

}
console.log('Notas dos alunos')
for (let i = 0; i<alunos.length; i++){
    console.log(alunos[i]+ '-'+ notas [i])
}
let SomaNotas=0
for (let i = 0; i<notas.length; i++){
    SomaNotas+=notas[i]
}
let media= SomaNotas/ alunos.length
console.log('a soma das notas foi '+ SomaNotas)
console.log('a media das notas foi '+ media)