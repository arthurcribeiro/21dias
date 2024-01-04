class Aluno{
    nome
    idade
    areaAtuacao
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        console.log('Olá, meu nome é ' + this.nome + ' minha idade é  ' + this.idade +' e minha area de atuação é '+ this.areaAtuacao )
    }
}
console.log('======= cadastro de alunos ======')
let alunoUm = new Aluno('Arthur', 23)
let alunos = [];
let continuar = true;
let indexDeAluno = 0
while(continuar){
    let nome = prompt('Insira o nome do aluno')
    let idade = parseInt(prompt('insira a idade do aluno'))
    let aluno = new Aluno( nome,idade)

    let areaAtuacao = prompt('Insira a area de atuação do aluno')
    aluno.areaAtuacao = areaAtuacao


    alunos[indexDeAluno]=aluno
    let desejaContinuar = prompt('Insira 1 caso deseja cadastrar um novo aluno')
    if(desejaContinuar != '1'){
        continuar=false;
    }else{
        indexDeAluno++
    }




}