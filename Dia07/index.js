let condicao = true 
   while(condicao === true){
    let idade = Number(prompt('digite a sua idade'))
    if(idade < 18){
        console.log('vc é menor de idade')
        condicao = false
    }
   }