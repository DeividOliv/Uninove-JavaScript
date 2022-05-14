var destino,aux;
destino=prompt("Digite seu destino: ");
aux=destino.toUpperCase(); // corrigir se escrever errado
switch (aux) {
  case "SÃO PAULO":
    document.write("Seja bem vindo a cidade que nunca para!");
  break; // Fechar o codigo para não dar erro
  case "NEW YORK":
    document.write("Seja bem vindo a Big Apple!");
  break;
  default:
    document.write("Não encontramos seu destino!");
}