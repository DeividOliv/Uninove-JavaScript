var num1, num2, res;
num1=prompt("Digite um número");
num1=parseInt(num1);
num2=prompt("Digite outro número");
num2=parseInt(num2);
document.write("Deivid de Oliveira Feitosa, RA: 922102722<br>");
document.write("Números digitados:<br>Número 1: "+num1+"<br>Número 2: "+num2+"<hr>");
res=(num1==num2);
document.write("Igualdade: "+res+"<br>");
res=(num1===num2);
document.write("Idêntico: "+res+"<br>");
res=(num1!=num2);
document.write("Não igual: "+res+"<br>");
res=(num1!==num2);
document.write("Não idêntico: "+res+"<br>");
res=(num1>num2);
document.write("Maior: "+res+"<br>");
res=(num1<num2);
document.write("Menor: "+res+"<br>");
res=(num1>=num2);
document.write("Maior ou igual: "+res+"<br>");
res=(num1<=num2);
document.write("Menor ou igual: "+res+"<br>");




