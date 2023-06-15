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
        total = sum(total,valor,5)
        item.push(nome);
        document.getElementById("ativo").innerHTML = quantidade;
        document.getElementById("ativo").style.backgroundColor = 'red';
}

function Ver(){
        if(quantidade > 0){
        alert("Seus itens são: " + item.join(", ") + ", o preço do seu carrinho é de: R$" + total);
}else{
        alert("Seu carrinho está vazio, dê uma olhada nos nossos produtos ;)")
}
}