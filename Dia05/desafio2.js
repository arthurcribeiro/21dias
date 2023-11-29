 let opcao = prompt('selecione o serviço qual você deseja (c/gasolina ou c/alcool ou calibrar pneus')

 switch (opcao) {
    case 'c/gasolina':
        let gas = prompt('qual valor deseja por?')
        console.log('no total deu '+(gas/5)+ ' litros')
        break;
    case 'c/alcool':
        let alcool = prompt ('qual valor deseja por?')
        console.log('no total deu ' + (alcool/3)+ 'litros')
        break;
    case 'calibrar pneus':
        console.log('seus pneus foram calibrados, tenha um bom dia')
        break;
 
    }
