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

  var loginStatus = getCookie("loginStatus");
  
function entrou() {
    var rm = document.login.RM.value;
    var senha = document.login.Senha.value;

    if ((rm == 21092 && senha == "intuitivoeamigavel23") || loginStatus == "eiki") {
        document.getElementById("foto").src = "assets/eiki.jpg";
        document.login.RM.style.display = "none";
        document.login.Senha.style.display = "none";
        document.login.botao.style.display = "none";
        document.getElementById("ss").style.display = "block";

        var franca = document.getElementById("APRESENTA").getElementsByTagName("h2");
        for (let g = 0; g < franca.length; g++) {
            franca[g].style.display = "none";
        }
        document.cookie = "loginStatus=" + "eiki" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";

        document.getElementById("resposta").innerHTML = "Seja muito bem vindo Gabriel Eiki";
    } else if ((rm == 21290 && senha == "Ocuralesbica2.0") || loginStatus == "riquelme") {
        document.getElementById("foto").src = "assets/riquelme.jpg";
        document.login.RM.style.display = "none";
        document.login.Senha.style.display = "none";
        document.login.botao.style.display = "none";
        document.getElementById("ss").style.display = "block";

        var franca = document.getElementById("APRESENTA").getElementsByTagName("h2");
        for (let g = 0; g < franca.length; g++) {
            franca[g].style.display = "none";
        }
        document.getElementById("resposta").innerHTML = "Seja muito bem vindo Riquelme Borges";
        document.cookie = "loginStatus=" + "riquelme" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";


    } else if ((rm == 21101 && senha == "Bressanfoda69") || loginStatus == "bressan") {
        document.getElementById("foto").src = "assets/bressan.jpg";
        document.login.RM.style.display = "none";
        document.login.Senha.style.display = "none";
        document.login.botao.style.display = "none";
        document.getElementById("ss").style.display = "block";
        document.cookie = "loginStatus=" + "bressan" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";


        var franca = document.getElementById("APRESENTA").getElementsByTagName("h2");
        for (let g = 0; g < franca.length; g++) {
            franca[g].style.display = "none";
        }
        document.getElementById("resposta").innerHTML = "Seja muito bem vindo Henrique Bressan";

    } else if ((rm == 20949 && senha == "senhaforte") || loginStatus == "caue") {
        document.getElementById("foto").src = "assets/caue.jpg";
        document.login.RM.style.display = "none";
        document.login.Senha.style.display = "none";
        document.login.botao.style.display = "none";
        document.getElementById("ss").style.display = "block";

        var franca = document.getElementById("APRESENTA").getElementsByTagName("h2");
        for (let g = 0; g < franca.length; g++) {
            franca[g].style.display = "none";
        }
        document.getElementById("resposta").innerHTML = "Seja muito bem vindo Cauê Santos";
        document.cookie = "loginStatus=" + "caue" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";

    } else if ( rm != null && senha != null){
        document.getElementById("resposta").innerHTML = "Senha ou usuário incorretos. Tente novamente";
    }
}

function lambda(){
    document.getElementById("foto").src = "assets/pfp.png";
        document.login.RM.style.display = "block";
        document.login.Senha.style.display = "block";
        document.login.botao.style.display = "block";
        document.getElementById("ss").style.display = "none";

        var franca = document.getElementById("APRESENTA").getElementsByTagName("h2");
        for (let g = 0; g < franca.length; g++) {
            franca[g].style.display = "block";
        }
        document.getElementById("resposta").innerHTML = "";
        document.cookie = "loginStatus=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
window.onload = function () {
    entrou(); // Check login status when the page loads
  }
