const resultado = document.getElementById("resultado")

function verificarResposta(resposta, proximaPergunta){
    if(resposta === "c"){
        resultado.innerHTML = "Resposta correta";
        resultado.style.color = "green";
        setTimeout(function() {
            window.location.href = proximaPergunta;
        }, 1900);
    } else {
        resultado.innerHTML = "Resposta incorreta";
        resultado.style.color = "red";
    }

}

