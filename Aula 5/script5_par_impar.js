var num,calc;
num=prompt("Digite um numero inteiro");
num=parseInt(num);

calc=num%2;

if(calc==0){
    document.write(num+" - PAR");
}
else{
    document.write(num+" - IMPAR");
}

