const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_nome=document.querySelector("#nome");
const tag_h2=document.querySelector("h2");

var uf=["SP","RJ","AC","TO","MG"];
document.write(uf+"<hr>");
id_dv.innerHTML=uf;
uf.sort(); //Ordenação A-Z
//document.write(uf+"<hr>");
class_teste.innerHTML=uf;
uf.reverse(); //Inverte
//document.write(uf+"<hr>");
id_nome.velue=uf; 