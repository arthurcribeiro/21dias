//let escolha = Number(prompt('escolha o numero da tabuada desejada'))

    //for(let tabuada=0; tabuada<=10; tabuada++){
    //console.log(escolha+' * ' + tabuada + ' = ' +(escolha*tabuada)  )
//}
    //for(let tabuada=0; tabuada<=10; tabuada++){
    //console.log((escolha+1)+' * ' + tabuada + ' = ' +((escolha+1)*tabuada)  )
//}
    //for(let tabuada=0; tabuada<=10; tabuada++){
   // console.log((escolha+2)+' * ' + tabuada + ' = ' +((escolha+2)*tabuada)  )
//}

let numero = parseInt(prompt('digite'))
   for(let i = numero; i <= numero + 2; i++) {
    console.log('tabuada do número: ' + i)
   for(let j = 0 ; j<=10; j++){
    console.log(i+ ' x ' + j + '='+ (i*j))
   }
   }