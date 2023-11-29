let fome =(prompt('você está com fome?'))
let dinheiro =(prompt('você está portando as notas???'))
let restaurante = (prompt('o podrão da esquina ta aberto hoje??'))

if(fome ==='sim' &&  dinheiro ==='sim' && restaurante ==='sim') {
    console.log('hoje tu vai piar de podrão')
} else if (fome === 'nao' || dinheiro === 'nao' )  {
    console.log('hoje tu só vai fazer um lanchinho em casa')}
else if(fome ==='sim' &&  dinheiro ==='sim' && restaurante ==='nao'){
    console.log('vai ter q pedir um delivery')
}
