var num1, num2;

function inverte(num){
    if (num == 0){
        num1 = num + 1;
        num2 = num1*2;
        console.log('Num1: ' + num1 + ' | Num2: ' + num2);

    }else if(num == 1){
        num1 = ++num;
        num2 = num1/2;
        console.log('Num1: ' + num1 + ' | Num2: ' + num2);
    }else{
        console.log('Opção inválida')
    }
}

inverte(1)

