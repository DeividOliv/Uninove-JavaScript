//Operador && (and)
var a,b,c,d;
a=50;
b=120;
c=200;
d=(a<=b) && (a>=c);// d= (V) && (F) // d=False
document.write("d = "+d);

//Operador && (and)
var a,b,c,d;
a=50;
b=120;
c=200;
d=!((a<=b)) && (a>=c);// d=! ((V) && (F)) // d=!(V)// d=False
document.write("d = "+d);