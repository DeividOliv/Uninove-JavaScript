
const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_nome=document.querySelector("#nome");
const tag_h2=document.querySelector("h2");


var valores=[10,20,30,40,50];
//document.write(valores+"<hr>");

id_dv.innerHTML=valores
valores.shift();//tira o primeiro elemento
//document.write(valores+"<hr>");

class_teste.innerHTML=valores;
valores.pop();//tira o ultimo elemento
//document.write(valores);