let numberOne, numberTwo;
numberOne = Number(prompt('Informe o primeiro número'));
while(isNaN(numberOne)){
    numberOne = prompt('Valor inválido. Informe o primeiro número')
}

numberTwo = Number(prompt('Informe o segundo número'));
while(isNaN(numberTwo)){
    numberTwo = prompt('Valor inválido. Informe o segundo número')
};

let myOperations = ['+','-','*','/','%','parOuImpar', '=='];

for (const operation of myOperations) {
    let result = 0;
    let menssage = '';
    switch(operation){        
        case '+':
            result = numberOne + numberTwo;
            menssage = 'A soma dos números é '+result;
            break;
        case '-':
            result = numberOne - numberTwo;
            menssage = 'A subtracao dos números é '+result;
            break;
        case '*':
            result = numberOne * numberTwo;
            menssage = 'A multiplicacao dos números é '+result;
            break;            
        case '/':
            if(numberTwo != 0){
                result = numberOne / numberTwo;
                menssage = 'A divisao dos números é '+result;
            }else{
                menssage = 'Não é possível fazer divisão por zero';
            }            
            break;  
        case '%':
            if(numberTwo != 0){
                result = numberOne % numberTwo;
                menssage = 'O resto da divisão é '+result;
            }else{
                menssage = 'Não é calcular o resto da divisão.';
            } 
            break;                         
        case 'parOuImpar':
            menssage = '';
            if((numberOne % 2) == 0){
                menssage = 'Primeiro número é par.';
            }else{
                menssage = 'Primeiro número é impar.';
            }

            if((numberTwo % 2) == 0){
                menssage = menssage+' Segundo número é par.';
            }else{
                menssage = menssage+' Segundo número é impar.';
            }            
            break;                                     
        case '==':
            if(numberOne == numberTwo){
                menssage = 'os números são iguais.';
            }else{
                menssage = 'os números são diferentes.';
            }
            break;                         
        default:
            menssage = 'Não implementado';
            break;
    }  
    
    if(menssage.trim != ''){
        alert(menssage);
    }
}