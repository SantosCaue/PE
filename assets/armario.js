function changeColor(id) {
    var botao = document.getElementById(id);
    botao.classList.toggle('changeColor');
}
function tornarVermelho() {
    var botoes = document.getElementsByClassName("quadrado");
    for (var i = 0; i < botoes.length; i++) {
        var botao = botoes[i];
        var corAtual = window.getComputedStyle(botao).backgroundColor;
        if (corAtual === "rgb(180, 137, 27)") {
            botao.style.backgroundColor = "red";
        }
    }
}   