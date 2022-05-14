var dia, nota, ano, mes, nome;
var usuario=prompt("Digite o usuario");
document.write("Usuario:"+usuario);
document.write("<hr>");
dia=15;
nota=9.8;
ano=2022;
mes="março";
nome="Deivid";
document.write(dia);//15
document.write("<br>");
document.write(nota);//9.8
document.write("<hr>");
document.write(dia + "/" + mes + "/"+ano);
document.write("<hr>");
document.write("Deivid, tirei nota: "+nota);
document.write("<hr>");
document.write("Usuario:"+usuario);
/*
Saída:
15/março/2022
Deivid, tirei nota: 9.8
*/