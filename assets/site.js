let item = [];
let quantidade = 0;
let total = 0;
const sum = (a, b, positions) => {
        const factor = Math.pow(10, positions)
        return (a.toFixed(positions) * factor + b.toFixed(positions) * factor) / factor
      }

function site(nome, valor) {
        if(screen.width <= 600){
        quantidade = quantidade + 1;
        total = sum(total,valor,5)
        item.push(nome);
        document.getElementById("ativo").innerHTML = quantidade;
        document.getElementById("ativo").style.backgroundColor = 'red';
}
}

function computador(nome, valor){
        quantidade = quantidade + 1;
        total = sum(total,valor,5);
        item.push(nome);
        document.getElementById("ativo").innerHTML = quantidade;
        document.getElementById("ativo").style.backgroundColor = 'red';
}

function Ver(){
        if(quantidade > 0){
        alert("Seus itens são: " + item.join(", ") + ", o preço do seu carrinho é de: R$" + total);
}else{
        alert("Seu carrinho está vazio, dê uma olhada nos nossos produtos ;)")
}}

function getCookie(name) {
  var cookieArr = document.cookie.split("; ");
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (name === cookiePair[0]) {
      return cookiePair[1];
    }
  }
  return null;
}

function checkLoginStatus() {
  var loginStatus = getCookie("loginStatus");
  if (loginStatus === "eiki") {
    document.getElementById("foto").src = "assets/eiki.jpg";
  } else if (loginStatus === "bressan") {
    document.getElementById("foto").src = "assets/bressan.jpg";
  } else if (loginStatus === "caue") {
    document.getElementById("foto").src = "assets/caue.jpg";
  } else if (loginStatus === "riquelme") {
    document.getElementById("foto").src = "assets/riquelme.jpg";
  }
}

window.onload = function () {
  checkLoginStatus(); // Check login status when the page loads
}
