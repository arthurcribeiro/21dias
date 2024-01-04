let nomes = []
let senhas = []
let contador = 0
let continuar = true

while(continuar){
    let opcao=prompt('O que deseja fazer? 1 - Cadrastro / 2 - Login / 3 - Excluir / 4 - Encerrar')
    switch (opcao){
        case"1":
        nomes[contador]=prompt('Qual o seu nome?')
        senhas[contador]=prompt('Qual a sua senha?')
        contador++
        break;
        case"2":
        let nome = prompt('Qual o nome?')
        let senha = prompt('Qual a senha?')
        let loginValido=false

        for(let i=0; i<nomes.length; i++){
            if(nome ==nomes[i] && senha == senhas[i]){
                loginValido=true}
        }
        if (loginValido){
            alert('Login feito com sucesso, seja bem-vindo!')
        } else{
            alert('Login ou senha incorretos, tente novamente.')
        }
        break;
        case"3":
        let nomeExcluir = prompt('qual o nome que deseja excluir?')
        let nomesAux = []
        let senhasAux = []
        let contadorAux = 0

        for (let i = 0; i<contador; i ++){
            if(nomeExcluir ==nomes[i]){
                alert('cadastro excluido com sucesso')
            } else{
                nomesAux[contadorAux] = nomes[i]
                senhasAux[contadorAux] = semjas[i]
                contadorAux++
            }
        }
        nomes=nomesAux
        senhas=senhasAux
        contador--
        break;
        case"4":
        continuar=false
        break;
        default:
        console.log('opção invalida, escolha outra!') 
        break;

           
    }
}