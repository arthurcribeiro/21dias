let num1 = parseInt(prompt('escolha seu primeiro numero'))
let num2 = parseInt(prompt('escolha seu segundo numero'))
let operacao = (prompt('escolha qual operação voce deseja (+,-,*,/,'))


switch (operacao) {
    case "+":
        console.log((num1) + '+' + (num2) + '=' + (num1+num2)  )
       break;
    case "-":
        console.log((num1) + '-' + (num2) + '=' + (num1-num2)  )
       break; 
    case "*":
        console.log((num1) + '*' + (num2) + '=' + (num1*num2)  )
       break;   
    case "/":
        console.log((num1) + '/' + (num2) + '=' + (num1/num2)  )
       break;
}