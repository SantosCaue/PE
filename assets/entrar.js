function entrou() {
    var rm = document.login.RM.value;
    var senha = document.login.Senha.value;

    if (rm == 21092 && senha == "intuitivoeamigavel23") {
        document.getElementById("foto").src = "assets/eiki.jpg";
        document.login.RM.style.display = "none";
        document.login.Senha.style.display = "none";
        document.login.botao.style.display = "none";

        var franca = document.getElementById("APRESENTA").getElementsByTagName("h2");
        for (let g = 0; g < franca.length; g++) {
            franca[g].style.display = "none";
                    document.cookie = "loginStatus=" + cookieValue + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";

        }
        document.cookie = "loginStatus=" + "eiki" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";

        document.getElementById("resposta").innerHTML = "Seja muito bem vindo Gabriel Eiki";
    } else if (rm == 21290 && senha == "Ocuralesbica2.0") {
        document.getElementById("foto").src = "assets/riquelme.jpg";
        document.login.RM.style.display = "none";
        document.login.Senha.style.display = "none";
        document.login.botao.style.display = "none";

        var franca = document.getElementById("APRESENTA").getElementsByTagName("h2");
        for (let g = 0; g < franca.length; g++) {
            franca[g].style.display = "none";
        }
        document.getElementById("resposta").innerHTML = "Seja muito bem vindo Riquelme Borges";
        document.cookie = "loginStatus=" + "riquelme" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";


    } else if (rm == 21101 && senha == "Bressanfoda69") {
        document.getElementById("foto").src = "assets/bressan.jpg";
        document.login.RM.style.display = "none";
        document.login.Senha.style.display = "none";
        document.login.botao.style.display = "none";
        document.cookie = "loginStatus=" + "bressan" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";


        var franca = document.getElementById("APRESENTA").getElementsByTagName("h2");
        for (let g = 0; g < franca.length; g++) {
            franca[g].style.display = "none";
        }
        document.getElementById("resposta").innerHTML = "Seja muito bem vindo Henrique Bressan";

    }else if(rm == 20949 && senha == "senhaforte"){
        document.getElementById("foto").src = "assets/caue.jpg";
        document.login.RM.style.display = "none";
        document.login.Senha.style.display = "none";
        document.login.botao.style.display = "none";

        var franca = document.getElementById("APRESENTA").getElementsByTagName("h2");
        for (let g = 0; g < franca.length; g++) {
            franca[g].style.display = "none";
        }
        document.getElementById("resposta").innerHTML = "Seja muito bem vindo Cauê Santos";
        document.cookie = "loginStatus=" + "caue" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";

    }else{
        rm = "";
        senha = "";
        document.getElementById("resposta").innerHTML = "Senha ou usuário incorretos. Tente novamente";

    }
}
