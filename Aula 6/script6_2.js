var x=[2020,2,"Hoje"];
x[0]++;//x[0]=2021
x[1]=x[0]%2;//[1]=2021%2//x[1]=1
x[2]+=" em dia";//x[2]="hoje"+" em dia"//hoje em dia"
document.querySelector("dv1").innerHTML=x[0]+"-"+x[1];
document.querySelector(".teste").innerHTML=x [1];

//x[0] e x[1] saida na area laranja
//x[2] saida na area aqua 

/*
document.write(x[0]+"<br");
document.write(x[1]+"<br");
document.write(x[2]+"<br");

*/