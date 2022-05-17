var cidade =["São Paulo","Campinas","Sorocaba", "Guarulhos","Pedreira","Jaguariuna"]

document.querySelector("h1").innerHTML=cidade[2]+" "+cidade[3];

document.querySelector("#dv1").innerHTML="A variavel cidade tem" +cidade.length + " valores ";

document.querySelector("h2").innerHTML+=cidade[5];




/*
mudar o conteúdo da tag h1, por sorocaba - Guarulhos
Mudar o conteudo da tag div id="dv1"para mostrar na mensagem
"A variavel cidade tem 6 valores" o numero 6 tem que ser baseado na quantidade
de valores da var cidade do tipo Araay

Incluir o ultimo valor da var cidade na teg h2

*/
